// 无论是服务还是指令调用 loading，最终底层还是通过服务的方式创建的，service.ts就是创建并挂载loading元素的实际执行方。由于需要知道要将loading元素挂载到哪里，所以需要传入一个options参数，来明确挂载位置。

import { createLoadingComponent, LoadingInstance } from './loading'
import { LoadingOptions } from './types'

const Loading = function (options: LoadingOptions): LoadingInstance {
  const instance = createLoadingComponent()
  options.parent.appendChild(instance.vm.$el)
  return instance
}

export default Loading
