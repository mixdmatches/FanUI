import { widthInstall } from '@Fan-ui/utils/width-install'
import _Button from './src/button.vue'

export const FButton = widthInstall(_Button)
declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof FButton
  }
}

export * from './src/button'

export default FButton
