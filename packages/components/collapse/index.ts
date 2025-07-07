import { withInstall } from '@fan-ui/utils/with-install'
import _Collapse from './src/collapse.vue'
import _CollapseItem from './src/collapseItem.vue'

export const FCollapse = withInstall(_Collapse)
export const FCollapseItem = withInstall(_CollapseItem)

declare module 'vue' {
  export interface GlobalComponents {
    FCollapse: typeof FCollapse
    FCollapseItem: typeof FCollapseItem
  }
}

export * from './src/collapse'
