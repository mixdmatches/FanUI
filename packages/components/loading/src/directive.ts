import type { Directive, DirectiveBinding } from 'vue'
import { FLoading, INSTANCE_KEY, type LoadingOptions } from './types'
import Loading from './service'

// 新建实例
const createInstance = (el: FLoading, binding: DirectiveBinding<boolean>) => {
  const options: LoadingOptions = {
    visible: binding.value,
    target: el
  }
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  }
}

const vLoading: Directive = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const app = el[INSTANCE_KEY]
    if (binding.value) {
      app.instance.open()
    } else {
      app.instance.close()
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
    el[INSTANCE_KEY] = null
  }
}

export default vLoading
