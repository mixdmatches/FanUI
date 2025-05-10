// 整合组件最后实现导出组件

import _Input from './src/input.vue'
import { widthInstall } from '@Fan-ui/utils/width-install'

export const FInput = widthInstall(_Input)

// 这里添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {
    FInput: typeof FInput
  }
}

export * from './src/input' // 导出所有属性和方法，包括组件的props和方法等

export default FInput // 可以app.use 也可以import单独使用
