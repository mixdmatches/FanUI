import { withInstall } from '@fan-ui/utils/with-install'
import _CheckBox from './src/checkbox.vue'
import _CheckBoxGroup from './src/checkbox-group.vue'

export const FCheckbox = withInstall(_CheckBox)
export const FCheckboxGroup = withInstall(_CheckBoxGroup)
declare module 'vue' {
  export interface GlobalComponents {
    FCheckbox: typeof FCheckbox
    FCheckboxGroup: typeof FCheckboxGroup
  }
}

export * from './src/checkbox'
