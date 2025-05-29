import { ExtractPropTypes, PropType } from 'vue'

export type ProgressFn = (percentage: number) => string
export type ProgressColor = {
  color: string
  percentage: number
}
export const progressProps = {
  /** @description 进度值 */
  percentage: {
    type: Number,
    default: 0
  },
  /** @description 进度条类型 */
  type: {
    type: String,
    default: 'line'
  },
  /** @description 进度条状态 */
  status: {
    type: String as PropType<'success' | 'exception' | 'warning'>,
    default: ''
  },
  /** @description 文字是否显示在进度条内 */
  textInside: {
    type: Boolean,
    default: false
  },
  /** @description 进度条宽度 */
  strokeWidth: {
    type: Number,
    default: 6
  },
  /** @description 是否显示文字 */
  showText: {
    type: Boolean,
    default: true
  },
  /** @description 自定义文字格式化 */
  format: {
    type: Function as PropType<ProgressFn>,
    default: (percentage: number) => `${percentage}%`
  },
  /** @description 自定义进度条颜色 */
  color: {
    type: [String, Array, Function] as PropType<
      ProgressFn | string | ProgressColor[]
    >,
    default: ''
  }
} as const

export type ProgressProps = ExtractPropTypes<typeof progressProps>
