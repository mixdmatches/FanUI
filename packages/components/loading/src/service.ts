// 无论是服务还是指令调用 loading，最终底层还是通过服务的方式创建的，service.ts就是创建并挂载loading元素的实际执行方。
// 由于需要知道要将loading元素挂载到哪里，所以需要传入一个options参数，来明确挂载位置。
import { addClass, createNamespace, removeClass } from '@fan-ui/utils'
import { createLoadingComponent, LoadingInstance } from './loading'
import { LoadingOptions, LoadingOptionsResolved } from './types'
import { isString } from '@vue/shared'

/**
 * Loading 服务函数
 * @param options - Loading配置选项
 * @returns Loading实例
 */
const Loading = function (options: LoadingOptions): LoadingInstance {
  // 解析传入的options参数
  const resolvedOptions = resolveOptions(options)
  // 创建Loading组件实例
  const instance = createLoadingComponent(resolvedOptions)
  addClassList(options, resolvedOptions.parent, instance)
  // 将Loading组件的DOM元素挂载到目标容器
  resolvedOptions.target.appendChild(instance.vm.$el)
  return instance
}

const addClassList = (
  options: LoadingOptions,
  parent: HTMLElement,
  instance: LoadingInstance
) => {
  const bem = createNamespace('loading')
  if (
    !['absolute', 'fixed', 'sticky'].includes(instance.originalPosition.value)
  ) {
    addClass(parent, bem.bm('parent', 'relative'))
  } else {
    removeClass(parent, bem.bm('parent', 'relative'))
  }
}

/**
 * 解析并标准化Loading配置选项
 * @param options - 原始配置选项
 * @returns 标准化后的配置选项
 */
const resolveOptions = (options: LoadingOptions): LoadingOptionsResolved => {
  let target: HTMLElement
  // 处理target选项：可以是字符串选择器或DOM元素
  if (isString(options.target)) {
    target =
      document.querySelector<HTMLElement>(options.target) ?? document.body
  } else {
    target = options.target || document.body
  }

  // 返回标准化后的配置
  return {
    parent: target === document.body ? document.body : target, // 父级元素
    target, // 目标挂载元素
    visible: options.visible ?? true, // 是否可见
    svg: options.svg || '', // 自定义SVG图标
    svgViewBox: options.svgViewBox || '', // SVG viewBox属性
    spinner: options.spinner || false, // 是否显示旋转动画
    text: options.text || '' // 加载文字
  }
}

export default Loading
