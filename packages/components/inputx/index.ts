import _InputX from './src/InputX.vue'
import { withInstall } from '@fan-ui/utils/with-install'

export const FInputX = withInstall(_InputX)

declare module 'vue' {
  export interface GlobalComponents {
    FInputX: typeof FInputX
  }
}

export * from './src/input-x'

export default FInputX
