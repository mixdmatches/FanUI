import { ExtractPropTypes, PropType } from 'vue'
import { isString, isNumber, isBoolean } from '@fan-ui/utils/types'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  modelValue: {
    type: [Boolean, String, Number] as PropType<CheckboxValueType>,
    default: undefined
  },
  label: {
    type: [String, Number, Boolean, Object] as PropType<
      CheckboxValueType | object
    >,
    default: undefined
  },
  value: {
    type: [String, Number, Boolean, Object] as PropType<
      CheckboxValueType | object
    >,
    default: undefined
  },
  indeterminate: Boolean,
  disabled: Boolean,
  name: {
    type: String,
    default: undefined
  },
  size: String as PropType<'large' | 'default' | 'small'>
} as const

export const checkboxEmits = {
  'update:modelValue': (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox> & unknown
