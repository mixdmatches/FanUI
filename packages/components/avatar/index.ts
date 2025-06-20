import _Avatar from './src/avatar.vue'
import { withInstall } from '@fan-ui/utils'

export const FAvatar = withInstall(_Avatar)

declare module 'vue' {
  export interface GlobalComponents {
    FAvatar: typeof FAvatar
  }
}

export * from './src/avatar'

export default FAvatar
