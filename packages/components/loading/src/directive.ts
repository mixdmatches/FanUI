import {
  isRef,
  ref,
  UnwrapRef,
  type Directive,
  type DirectiveBinding
} from 'vue'
import { type FLoading, INSTANCE_KEY, type LoadingOptions } from './types'
import Loading from './service'
import { isObject, isString } from '@fan-ui/utils'

// 新建实例
const createInstance = (el: FLoading, binding: DirectiveBinding<boolean>) => {
  const vm = binding.instance

  const getBindingProp = <K extends keyof LoadingOptions>(
    key: K
  ): LoadingOptions[K] =>
    isObject(binding.value) ? binding.value[key] : undefined

  const resolveExpression = (key: any) => {
    const data = (isString(key) && vm?.[key]) || key
    if (data) return ref(data)
    else return data
  }

  const getProp = <K extends keyof LoadingOptions>(name: K) =>
    resolveExpression(
      getBindingProp(name) || el.getAttribute(`fan-loading-${name}`)
    )
  const fullscreen =
    getBindingProp('fullscreen') ?? binding.modifiers.fullscreen

  const options: LoadingOptions = {
    text: getProp('text'),
    svgViewBox: getProp('svgViewBox'),
    spinner: getProp('spinner'),
    svg: getProp('svg'),
    target: getBindingProp('target') ?? (fullscreen ? undefined : el),
    background: getProp('background'),
    fullscreen,
    lock: getBindingProp('lock') ?? binding.modifiers.lock
  }
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  }
}
const updateOptions = (
  newOptions: UnwrapRef<LoadingOptions>,
  originalOptions: LoadingOptions
) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key]
  }
}
const vLoading: Directive = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY]
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding)
      } else if (binding.value && binding.oldValue) {
        if (isObject(binding.value))
          updateOptions(binding.value, instance!.options)
      } else {
        instance?.instance.close()
      }
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
    el[INSTANCE_KEY] = null
  }
}

export default vLoading
