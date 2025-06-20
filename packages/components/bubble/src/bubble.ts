import { ExtractPropTypes, PropType } from 'vue'
import type { AvatarConfigType } from './type'

export const bubbleProps = {
  /** 气泡内容 */
  content: {
    type: String,
    required: true
  },
  /** 是否加载 */
  loading: {
    type: Boolean,
    default: false
  },
  /** 气泡样式 */
  variant: {
    type: String as PropType<'none' | 'border'>,
    default: ''
  },
  /** 对齐方式 */
  align: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  /** 头像配置 */
  avatarConfig: {
    type: Object as PropType<AvatarConfigType>,
    default: () => ({})
  }
} as const

export type BubbleProps = ExtractPropTypes<typeof bubbleProps>
