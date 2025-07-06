import { ExtractPropTypes, PropType } from 'vue'
import { CollapseActiveName } from './types'
import { Right } from '@icon-park/vue-next'
export const collapseItemProps = {
  name: {
    type: String as PropType<CollapseActiveName>,
    require: true
  },
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: Right
  }
} as const

export type CollapseItemProps = Partial<
  ExtractPropTypes<typeof collapseItemProps>
>
