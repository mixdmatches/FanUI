import { ButtonSizeType, ButtonType, ButtonNativeType } from './types'
import { ExtractPropTypes, PropType } from 'vue'

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
    type: [String, Object] as PropType<string | Record<string, unknown>>
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
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button'
  },
  iconPlasement: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  }
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits

export type ButtonProps = ExtractPropTypes<typeof buttonProps> // 提取出的类型
