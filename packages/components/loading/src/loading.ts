import { createApp, defineComponent, h } from 'vue'

export function createLoadingComponent() {
  const FLoadingComponent = defineComponent({
    name: 'FLoading',
    setup() {
      return () => {
        const spinner = h(
          'div',
          { class: 'f-loading-spinner' },
          '正在加载中...'
        )
        return h('div', { class: 'f-loading-mask' }, spinner)
      }
    }
  })

  const loadingInstance = createApp(FLoadingComponent)
  const vm = loadingInstance.mount(document.createElement('div'))

  return {
    vm
  }
}

export type LoadingInstance = ReturnType<typeof createLoadingComponent>
