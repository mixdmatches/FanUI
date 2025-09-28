import type { ExtractPropTypes, PropType } from 'vue'

export const paginationProps = {
  // 当前页码
  current: {
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
  },
  // 每页条数选项
  pageSizeOptions: {
    type: Array as PropType<Array<number>>,
    default: () => [10, 20, 30, 40]
  },
  // 是否显示总条数
  showTotal: {
    type: Boolean,
    default: false
  },
  showJumper: {
    type: Boolean,
    default: false
  }
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
