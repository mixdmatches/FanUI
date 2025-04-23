import { widthInstall } from '@Fan-ui/utils/width-install'
import _Button from './src/button.vue'

export const Button = widthInstall(_Button)

declare module 'vue' {
  export interface GlobalComponents {
    FButton: typeof Button
  }
}

export * from './src/button'

export default Button
