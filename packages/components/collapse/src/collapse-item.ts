import { ExtractPropTypes, PropType } from 'vue'
import { CollapseActiveName } from './types'

export const collapseItemProps = {
  name: {
    type: String as PropType<CollapseActiveName>,
    default: '',
    require: true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
} as const

export type CollapseItemProps = Partial<
  ExtractPropTypes<typeof collapseItemProps>
>
