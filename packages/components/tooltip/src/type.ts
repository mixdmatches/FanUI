export enum Placement {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

export enum Trigger {
  Hover = 'hover',
  Click = 'click'
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
}

export interface TooltipInstance {
  open: () => void
  close: () => void
}
