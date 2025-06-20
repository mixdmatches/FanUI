import _VirtualList from './src/virtual-list'
import { withInstall } from '@fan-ui/utils/with-install'

export const FVirtualScrollList = withInstall(_VirtualList)

declare module 'vue' {
  export interface GlobalComponents {
    FVirtualScrollList: typeof FVirtualScrollList
  }
}

export * from './src/props'

export default FVirtualScrollList

export type { VirtualProps } from './src/props'
