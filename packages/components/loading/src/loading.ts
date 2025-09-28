import {
  createApp,
  defineComponent,
  h,
  reactive,
  withDirectives,
  vShow,
  toRefs
} from 'vue'
import type { LoadingOptionsResolved } from './types'
import { createNamespace, removeClass } from '@fan-ui/utils'

/**
 * 创建Loading组件实例
 * @param options 配置项
 * @returns 包含组件实例和控制方法对象
 */
export function createLoadingComponent(options: LoadingOptionsResolved) {
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: ''
  })

  // 定义loading组件
  const FLoadingComponent = defineComponent({
    name: 'FLoading',
    setup() {
      const bem = createNamespace('loading')
      return () => {
        // 处理自定义加载图标
        const svg = data.spinner || data.svg
        // 创建SVG旋转动画元素
        const spinner = h(
          'svg',
          {
            class: 'circular',
            viewBox: data.svgViewBox ? data.svgViewBox : '0 0 50 50',
            ...(svg ? { innerHTML: svg } : {})
          },
          [
            h('circle', {
              class: 'path',
              cx: '25',
              cy: '25',
              r: '20',
              fill: 'none'
            })
          ]
        )
        // 创建加载文字（如果有自定义文字就用自定义文字）
        const spinnerText = data.text
          ? h('p', { class: bem.b('text') }, [data.text])
          : undefined
        // 创建loading容器
        const loadingContainer = h(
          'div',
          {
            style: { backgroundColor: data.background || '' },
            class: [bem.b('mask'), data.fullscreen ? 'is-fullscreen' : '']
          },
          [h('div', { class: bem.b('spinner') }, [spinner, spinnerText])]
        )
        // 绑定v-show指令控制显隐
        return withDirectives(loadingContainer, [[vShow, data.visible]])
      }
    }
  })

  // 关闭loading
  const close = () => {
    data.visible = false
    const bem = createNamespace('loading')
    removeClass(data.parent, bem.bm('parent', 'hidden'))
    removeClass(data.parent, bem.bm('parent', 'relative'))
    vm.$el?.parentNode?.removeChild(vm.$el)
    options.closed?.()
  }

  // 创建并挂载Loading实例
  const loadingInstance = createApp(FLoadingComponent)
  const vm = loadingInstance.mount(document.createElement('div'))

  return {
    ...toRefs(data),
    vm, // 组件实例
    close // 关闭方法
  }
}

/**
 * Loading组件实例类型
 */
export type LoadingInstance = ReturnType<typeof createLoadingComponent>
