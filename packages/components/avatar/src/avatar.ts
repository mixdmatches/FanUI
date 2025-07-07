import { ExtractPropTypes, PropType } from 'vue'

export const avatarProps = {
  src: {
    type: String,
    default: ''
  },
  alt: String,
  size: {
    type: [Number, String] as PropType<number | 'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  shape: {
    type: String as PropType<'circle' | 'square'>,
    default: 'square'
  },
  icon: {
    type: [String, Object] as PropType<string | Record<string, unknown>>
  }
} as const

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
