// 无论是服务还是指令调用 loading，最终底层还是通过服务的方式创建的，service.ts就是创建并挂载loading元素的实际执行方。由于需要知道要将loading元素挂载到哪里，所以需要传入一个options参数，来明确挂载位置。
import { createLoadingComponent, LoadingInstance } from './loading'
import { LoadingOptions, LoadingOptionsResolved } from './types'
import { isString } from '@vue/shared'

const Loading = function (options: LoadingOptions): LoadingInstance {
  const resolvedOptions = resolveOptions(options)
  const instance = createLoadingComponent(resolvedOptions)
  resolvedOptions.target.appendChild(instance.vm.$el)
  return instance
}

// 解析options
const resolveOptions = (options: LoadingOptions): LoadingOptionsResolved => {
  let target: HTMLElement
  if (isString(options.target)) {
    target =
      document.querySelector<HTMLElement>(options.target) ?? document.body
  } else {
    target = options.target || document.body
  }

  return {
    parent: target === document.body ? document.body : target,
    target,
    visible: options.visible ?? true
  }
}

export default Loading
