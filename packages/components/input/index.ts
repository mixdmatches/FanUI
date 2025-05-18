import _Input from './src/input.vue'
import { withInstall } from '@Fan-ui/utils/with-install'

export const FInput = withInstall(_Input)

declare module 'vue' {
  export interface GlobalComponents {
    FInput: typeof FInput
  }
}

export * from './src/input'

export default FInput
