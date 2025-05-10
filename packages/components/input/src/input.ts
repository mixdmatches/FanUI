import { ExtractPropTypes, PropType } from 'vue'
import { isString } from '@vue/shared'

export const inputProps = {
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  }
} as const

export const inputEmits = {
  'update:modelValue': (value: string) => isString(value),
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  focus: (event: FocusEvent) => event instanceof FocusEvent,
  change: (value: string) => isString(value),
  input: (value: string) => isString(value),
  clear: () => true
}

export type InputProps = ExtractPropTypes<typeof inputProps>

export type InputEmits = typeof inputEmits
