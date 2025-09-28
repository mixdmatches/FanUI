import { withInstall } from '@fan-ui/utils/with-install'
import _Tooltip from './src/tooltip.vue'

export const FTooltip = withInstall(_Tooltip)

declare module 'vue' {
  export interface GlobalComponents {
    FTooltip: typeof FTooltip
  }
}

export * from './src/tooltip'
export default FTooltip
