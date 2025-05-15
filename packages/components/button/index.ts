import { withInstall } from '@Fan-ui/utils/with-install'
import _Button from './src/button.vue'

export const FButton = withInstall(_Button)
declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof FButton
  }
}

export * from './src/button'

export default FButton
