import { ExtractPropTypes } from 'vue'

const MESSAGE_TYPE = ['success', 'info', 'warning', 'error']

export const messageProps = {
  /** @description 消息类型 */
  type: {
    type: String,
    default: 'info',
    validator(value: string) {
      return MESSAGE_TYPE.includes(value)
    }
  },
  /** @description 消息内容 */
  message: {
    type: String,
    default: ''
  },
  /** @description 控制是否显示关闭按钮 */
  showClose: {
    type: Boolean,
    default: false
  },
  /** @description 显示时间 */
  duration: {
    type: Number,
    default: 3000
  },
  /** @description plain背景 */
  plain: {
    type: Boolean,
    default: false
  }
} as const

export type MessageProps = Partial<ExtractPropTypes<typeof messageProps>>
