import { isString } from '@fan-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const inputXProps = {
  modelValue: {
    type: String,
    default: ''
  },
  simple: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  maxLength: {
    type: Number,
    default: 0
  }
} as const

export const inputXEmits = {
  'update:modelValue': (val: string) => isString(val),
  onSubmit: (val: string) => isString(val),
  onCancel: () => void 0
}

export type InputXPropsType = ExtractPropTypes<typeof inputXProps>
