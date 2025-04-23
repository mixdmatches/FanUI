import _FTree from './src/tree.vue'
import { widthInstall } from '@Fan-ui/utils/width-install'

const FTree = widthInstall(_FTree)

export default FTree

export * from './src/tree.vue'

declare module 'vue' {
  export interface GlobalComponents {
    FTree: typeof FTree
  }
}
