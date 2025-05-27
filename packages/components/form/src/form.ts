// model
// rules
import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import { Arrayable, FormItemContext, FormItemRule } from './form-item'

export const formProps = {
  model: { type: Object, required: true },
  rules: {
    type: Object as PropType<Record<string, Arrayable<FormItemRule>>>
  },
  // 行内表单
  inline: {
    type: Boolean,
    default: false
  },
  // 标签的位置
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: 'right'
  }
}

export type FormProps = Partial<ExtractPropTypes<typeof formProps>>

export interface FormContext extends FormProps {
  addField: (filed: FormItemContext) => void
}

export const FormContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
