// 整合组件最后实现导出组件

import _Icon from './src/icon.vue'
import { withInstall } from '@fan-ui/utils/with-install'

export const FIcon = withInstall(_Icon)

// 这里添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {
    FIcon: typeof FIcon
  }
}

export * from './src/icon' // 导出所有属性和方法，包括组件的props和方法等

export default FIcon // 可以app.use 也可以import单独使用
