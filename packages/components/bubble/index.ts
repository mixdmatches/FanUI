import _Bubble from './src/bubble.vue'
import { withInstall } from '@fan-ui/utils'

export const FBubble = withInstall(_Bubble)

declare module 'vue' {
  export interface GlobalComponents {
    FBubble: typeof FBubble
  }
}

export * from './src/bubble'

export default FBubble
