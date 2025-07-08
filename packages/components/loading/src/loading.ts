import {
  createApp,
  defineComponent,
  h,
  reactive,
  withDirectives,
  vShow
} from 'vue'
import { LoadingOptionsResolved } from './types'

export function createLoadingComponent(options: LoadingOptionsResolved) {
  const data = reactive({
    ...options
  })

  const FLoadingComponent = defineComponent({
    name: 'FLoading',
    setup() {
      return () => {
        const spinner = h(
          'div',
          { class: 'f-loading-spinner' },
          '正在加载中...'
        )
        const loadingContainer = h('div', { class: 'f-loading-mask' }, spinner)
        return withDirectives(loadingContainer, [[vShow, data.visible]])
      }
    }
  })

  const close = () => {
    data.visible = false
  }
  const open = () => {
    data.visible = true
  }

  const loadingInstance = createApp(FLoadingComponent)
  const vm = loadingInstance.mount(document.createElement('div'))

  return {
    vm,
    close,
    open
  }
}

export type LoadingInstance = ReturnType<typeof createLoadingComponent>
