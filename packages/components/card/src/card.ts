import { ExtractPropTypes, PropType } from 'vue'

export const cardProps = {
  title: {
    type: String,
    default: ''
  },
  shadow: {
    type: String as PropType<'never' | 'always' | 'hover'>,
    default: 'hover'
  }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
