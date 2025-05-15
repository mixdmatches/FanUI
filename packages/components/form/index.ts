import { withInstall } from '@Fan-ui/utils/with-install'
import _FormItem from './src/form-item.vue'

const FormItem = withInstall(_FormItem)

export default FormItem

export type { FormItemProps } from './src/form-item'

declare module 'vue' {
  export interface GlobalComponents {
    FFormItem: typeof FormItem
  }
}
