import { ExtractPropTypes } from 'vue'

export const paginationProps = {
  // 当前页码
  modelValue: {
    type: Number,
    default: 1
  },
  // 总条数
  total: {
    type: Number,
    default: 0
  },
  // 每页条数
  pageSize: {
    type: Number,
    default: 10
  }
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
