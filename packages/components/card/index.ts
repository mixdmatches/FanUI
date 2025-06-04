import { withInstall } from '@fan-ui/utils'

import _Card from './src/card.vue'

export const FCard = withInstall(_Card)

declare module 'vue' {
  export interface GlobalComponents {
    FCard: typeof FCard
  }
}

export default FCard
