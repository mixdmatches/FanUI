import { withInstall } from '@fan-ui/utils/with-install'
import _Progress from './src/progress.vue'

export const FProgress = withInstall(_Progress)

declare module 'vue' {
  export interface GlobalComponents {
    FProgress: typeof FProgress
  }
}

export * from './src/progress'

export default FProgress
