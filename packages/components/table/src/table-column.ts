import { ExtractPropTypes } from 'vue'

export const tableColumnProps = {
  prop: {
    type: String,
    default: ''
  }
} as const

export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
