import { withInstall } from '@fan-ui/utils/with-install'
import _WaterMark from './src/WaterMark.vue'

export const FWaterMark = withInstall(_WaterMark)
declare module 'vue' {
  export interface GlobalComponents {
    FWaterMark: typeof FWaterMark
  }
}

export * from './src/water-mark'

export default FWaterMark
