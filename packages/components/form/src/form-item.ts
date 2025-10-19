import type { RuleItem } from 'async-validator'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type ArrayAble<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: ArrayAble<string>
}

export const formItemValidateState = ['success', 'error', '']
export type FormItemValidateState = (typeof formItemValidateState)[number]

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<ArrayAble<FormItemRule>>,
  showMessage: {
    type: Boolean,
    default: true
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: ''
  },
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  }
} as const

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>

export type FormItemProp = ArrayAble<string>

export interface FormItemContext extends FormItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
  ) => Promise<boolean>
  resetField(): void
  clearValidate(): void
}

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
