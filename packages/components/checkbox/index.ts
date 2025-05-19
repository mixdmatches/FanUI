import { withInstall } from '@fan-ui/utils/with-install'
import _CheckBox from './src/checkbox.vue'

export const FCheckbox = withInstall(_CheckBox)
declare module 'vue' {
  export interface GlobalComponents {
    FCheckbox: typeof FCheckbox
  }
}

export * from './src/checkbox'

export default FCheckbox
