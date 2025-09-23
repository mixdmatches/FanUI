import { withInstall } from '@fan-ui/utils/with-install'
import _VirtualList from './src/virtual'

export const FVirtualList = withInstall(_VirtualList)
declare module 'vue' {
  export interface GlobalComponents {
    FVirtualList: typeof FVirtualList
  }
}

export * from './src/virtual'

export default FVirtualList
