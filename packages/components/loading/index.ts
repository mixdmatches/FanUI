import { App } from 'vue'
import vLoading from './src/directive'
import Loading from './src/service'

export const FLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading
}

export default FLoading
export { vLoading, vLoading as FLoadingDirective, Loading as FLoadingService }

export * from './src/types'
