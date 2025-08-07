import { withInstall } from '@fan-ui/utils/with-install'
import _Dropdown from './src/dropdown.vue'

export const FDropdown = withInstall(_Dropdown)
declare module 'vue' {
  export interface GlobalComponents {
    FDropdown: typeof FDropdown
  }
}

export * from './src/dropdown'

export default FDropdown
