import type { Directive } from 'vue'
import { ElementLoading, INSTANCE_KEY, type LoadingOptions } from './types'
import Loading from './service'

const createInstance = (el: ElementLoading, binding: any) => {
  const options: LoadingOptions = {
    parent: el
  }
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  }
}

const vLoading: Directive = {
  created(el, binding) {
    if (binding.value) {
      createInstance(el, binding)
    }
  }
}

export default vLoading
