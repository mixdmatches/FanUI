// 整合组件最后实现导出组件

import _Upload from './src/upload.vue'
import { withInstall } from '@Fan-ui/utils/with-install'

export const FUpload = withInstall(_Upload)

// 这里添加的类型可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents {
    FUpload: typeof FUpload
  }
}

export * from './src/upload' // 导出所有属性和方法，包括组件的props和方法等

export default FUpload // 可以app.use 也可以import单独使用
