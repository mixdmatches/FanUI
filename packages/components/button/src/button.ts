import { ButtonSizeType, ButtonType } from './interface'
import { Component, ExtractPropTypes, PropType } from 'vue'

export const buttonProps = {
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'default'
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [String] as PropType<string | Component>
  },
  disabled: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  bg: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'button'
  }
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits

export type ButtonProps = ExtractPropTypes<typeof buttonProps> // 提取出的类型
