import {
  PropType,
  ExtractPropTypes,
  InjectionKey,
  WritableComputedRef
} from 'vue'
import { CheckboxValueType } from './checkbox'

// 排除掉 boolean 类型，因为 CheckboxGroup 的值只能是字符串、数字或对象类型
export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export type CheckboxGroupContext = {
  modelValue?: WritableComputedRef<any>
  disabled?: boolean
  size: string
  changeEvent?: (...args: any) => any
}

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<CheckboxGroupValueType>,
    default: () => []
  },
  disabled: Boolean,
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  }
} as const

export const checkboxGroupEmits = {
  'update:modelValue': (val: CheckboxGroupValueType) => Array.isArray(val),
  change: (val: CheckboxGroupValueType): boolean => Array.isArray(val)
} as const

// inject传递的一些属性的类型
export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
