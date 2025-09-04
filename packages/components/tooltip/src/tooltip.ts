import type { PropType, ExtractPropTypes } from 'vue'
import type { Placement, Trigger } from './type'
import type { Options } from '@popperjs/core'

export const tooltipProps = {
  content: {
    type: String,
    default: ''
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  trigger: {
    type: String as PropType<Trigger>,
    default: 'hover'
  },
  /** @description 手动模式 */
  manual: {
    type: Boolean,
    default: false
  },
  popperOptions: {
    type: Object as PropType<Partial<Options>>,
    default: () => ({})
  },
  transition: {
    type: String,
    default: 'fade'
  },
  openDelay: {
    type: Number,
    default: 200
  },
  closeDelay: {
    type: Number,
    default: 200
  },
  pure: {
    type: Boolean,
    default: false
  },
  noArrow: {
    type: Boolean,
    default: false
  }
} as const

export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>
