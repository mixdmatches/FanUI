import { ExtractPropTypes, Ref } from 'vue'
import { tooltipProps } from '../../tooltip/src/tooltip'
import { TooltipInstance } from '@fan-ui/components/tooltip/src/type'

export const dropdownProps = {
  ...tooltipProps,
  hideAfterClick: {
    type: Boolean,
    default: true
  },
  showShadow: {
    type: Boolean,
    default: false
  }
} as const

export const dropdownEvent = {
  'visible-change': (visible: boolean) => void 0
}

export interface DropdownInstance {
  open: () => void
  close: () => void
}

export interface DropdownContext {
  hideAfterClick: boolean
  tooltipRef: Ref<TooltipInstance>
}

export const dropdownKey = Symbol('dropdown')

export type DropdownProps = Partial<ExtractPropTypes<typeof dropdownProps>>
export type DropdownEvent = typeof dropdownEvent
