import { ExtractPropTypes, PropType } from 'vue'
import type { AvatarConfigType } from './type'

export const bubbleProps = {
  /** 气泡内容 */
  content: String,
  /** 是否加载 */
  loading: {
    type: Boolean,
    default: false
  },
  /** 气泡样式 */
  variant: {
    type: String as PropType<'none' | 'border' | 'filled'>,
    default: 'filled'
  },
  /** 对齐方式 */
  align: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  /** 头像配置 */
  avatarConfig: Object as PropType<AvatarConfigType>,
  /** 头像位置 */
  avatarPosition: {
    type: String as PropType<'top' | 'side'>,
    default: 'side'
  }
} as const

export type BubbleProps = Partial<ExtractPropTypes<typeof bubbleProps>>
