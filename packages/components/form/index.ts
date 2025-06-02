import { withInstall } from '@fan-ui/utils/with-install'
import _FormItem from './src/form-item.vue'
import _Form from './src/form.vue'

const FFormItem = withInstall(_FormItem)
const FForm = withInstall(_Form)

declare module 'vue' {
  export interface GlobalComponents {
    FFormItem: typeof FFormItem
    FForm: typeof FForm
  }
}

export { FForm, FFormItem }

export type { FormItemProps } from './src/form-item'
export type { FormProps } from './src/form'

export type FormInstance = InstanceType<typeof _Form>
