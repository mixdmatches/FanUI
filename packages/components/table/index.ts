import { withInstall } from '@fan-ui/utils/with-install'
import _Table from './src/table.vue'

export const FTable = withInstall(_Table)

declare module 'vue' {
  export interface GlobalComponents {
    FTable: typeof FTable
  }
}

export default FTable
