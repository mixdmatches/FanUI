import { withInstall } from '@fan-ui/utils/with-install'
import _CheckBox from './src/checkbox.vue'
import _CheckBoxGroup from './src/checkbox-group.vue'
import _checkBoxButton from './src/checkbox-button.vue'

export const FCheckbox = withInstall(_CheckBox)
export const FCheckboxGroup = withInstall(_CheckBoxGroup)
export const FCheckboxButton = withInstall(_checkBoxButton)
declare module 'vue' {
  export interface GlobalComponents {
    FCheckbox: typeof FCheckbox
    FCheckboxGroup: typeof FCheckboxGroup
    FCheckboxButton: typeof FCheckboxButton
  }
}

export * from './src/checkbox'
