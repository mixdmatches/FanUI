import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import { Arrayable, FormItemContext, FormItemRule } from './form-item'

export type FormRules = Record<string, Arrayable<FormItemRule>>

export const formProps = {
  model: { type: Object, required: true },
  rules: {
    type: Object as PropType<FormRules>
  },
  inline: {
    type: Boolean,
    default: false
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: 'right'
  },
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  }
}

export type FormProps = Partial<ExtractPropTypes<typeof formProps>>

export interface FormContext extends FormProps {
  addField: (filed: FormItemContext) => void
  resetFields: (filed: FormItemContext) => void
  clearValidate: (filed: FormItemContext) => void
}

export const FormContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
