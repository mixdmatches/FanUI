import { withInstall } from '@fan-ui/utils/with-install'
import _Radio from './src/radio.vue'
import _RadioGroup from './src/radio-group.vue'

export const FRadio = withInstall(_Radio)
export const FRadioGroup = withInstall(_RadioGroup)

declare module 'vue' {
  export interface GlobalComponents {
    FRadio: typeof FRadio
    FRadioGroup: typeof FRadioGroup
  }
}

export * from './src/radio'
