import { ExtractPropTypes, PropType, SVGAttributes } from 'vue'

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
  },
  /** @description 圆形进度条宽高 */
  width: {
    type: Number,
    default: 126
  },
  /** @description 路线两端形状  */
  strokeLinecap: {
    type: String as PropType<SVGAttributes['stroke-linecap']>,
    default: 'round'
  },
  /** @description 是否显示条纹 */
  striped: Boolean,
  /** @description 条纹是否流动 */
  stripedFlow: Boolean,
  /** @description 动画时间 */
  duration: {
    type: Number,
    default: 3
  },
  /** @description 是否要动画 */
  indeterminate: Boolean
} as const

export type ProgressProps = ExtractPropTypes<typeof progressProps>
