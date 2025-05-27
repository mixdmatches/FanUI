import { RuleItem } from 'async-validator'
import { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type Arrayable<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

export const formItemValidateState = ['success', 'error', '']
export type FormItemValidateState = (typeof formItemValidateState)[number]

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<Arrayable<FormItemRule>>,
  showMessage: {
    type: Boolean,
    default: true
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: ''
  }
} as const

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>

export interface FormItemContext extends FormItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
  ) => Promise<unknown>
}

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
