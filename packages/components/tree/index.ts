import _FTree from './src/tree.vue'
import { withInstall } from '@Fan-ui/utils/with-install'

const FTree = withInstall(_FTree)

export default FTree

export * from './src/tree.vue'

declare module 'vue' {
  export interface GlobalComponents {
    FTree: typeof FTree
  }
}
