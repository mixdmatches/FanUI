import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import {
  ArrayAble,
  FormItemContext,
  FormItemProp,
  FormItemRule
} from './form-item'

export type FormRules = Record<string, ArrayAble<FormItemRule>>

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
  resetFields: (filed: FormItemProp) => void
  clearValidate: (filed: FormItemProp) => void
}

export const FormContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
