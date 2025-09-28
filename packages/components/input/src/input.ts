import type { Component, ExtractPropTypes, PropType } from 'vue'
import { isString } from '@vue/shared'

export const componentSizes = ['', 'default', 'small', 'large'] as const
export const useSizeProp = {
  type: String,
  values: componentSizes,
  required: false
} as const

export const inputProps = {
  type: {
    type: String,
    default: 'text'
  },
  size: useSizeProp,
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
  autofocus: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  prefixIcon: {
    type: [String, Object] as PropType<string | Component>
  },
  suffixIcon: {
    type: [String, Object] as PropType<string | Component>
  },
  inputStyle: {
    type: Object as PropType<CSSStyleDeclaration>,
    default: () => ({})
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

export type InputProps = Partial<ExtractPropTypes<typeof inputProps>>

export type InputEmits = typeof inputEmits
