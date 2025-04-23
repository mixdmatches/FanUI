// 整合组件最后实现导出组件

import _Icon from './src/icon.vue'
import { widthInstall } from '@Fan-ui/utils/width-install'

const Icon = widthInstall(_Icon)
export default Icon // 可以app.use 也可以import单独使用
export * from './src/icon' // 导出所有属性和方法，包括组件的props和方法等

// 这里添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {
    // 扩展全局组件类型，这样就可以在任何地方使用了
    FIcon: typeof Icon // 注册全局组件，这样就可以在任何地方使用了
  }
}
