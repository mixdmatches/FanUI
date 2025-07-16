import type { PropType, ExtractPropTypes } from 'vue'
import { Placement, Trigger } from './type'

export const tooltipProps = {
  content: {
    type: String,
    default: ''
  },
  placement: {
    type: String as PropType<Placement>,
    default: Placement.Bottom
  },
  trigger: {
    type: String as PropType<Trigger>,
    default: Trigger.Hover
  },
  /** @description 手动模式 */
  manual: {
    type: Boolean,
    default: false
  }
} as const

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
