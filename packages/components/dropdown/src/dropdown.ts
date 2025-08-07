import { ExtractPropTypes, PropType, VNode } from 'vue'
import { tooltipProps } from '../../tooltip/src/tooltip'

export interface MenuOption {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divider?: boolean
}

export const dropdownProps = {
  ...tooltipProps,
  menuOptions: {
    type: Array as PropType<MenuOption[]>,
    default: () => []
  },
  hideAfterClick: {
    type: Boolean,
    default: true
  }
} as const

export const dropdownEvent = {
  'visible-change': (visible: boolean) => void 0,
  select: (value: MenuOption) => void 0
}

export interface DropdownInstance {
  open: () => void
  close: () => void
}

export type DropdownProps = Partial<ExtractPropTypes<typeof dropdownProps>>
export type DropdownEvent = typeof dropdownEvent
