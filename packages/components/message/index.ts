import Message from './src/message.vue'
import { h, render } from 'vue'
import { MessageProps } from './src/message'

let messageInstanceList: Array<HTMLElement> = []

const MESSAGE_START_TOP = 56 //起始高度
const MESSAGE_HEIGHT = 44 // 消息高度
const MESSAGE_GAP = 16 // 消息间距

export const destoryMessageElement = (element: HTMLElement) => {
  if (!element.parentElement?.contains(element)) return
  element.parentElement.removeChild(element)
  messageInstanceList = messageInstanceList.filter(item => item !== element)
  messageInstanceList.forEach((item, index) => {
    item.style.top = `${MESSAGE_START_TOP + MESSAGE_HEIGHT * index + MESSAGE_GAP * index}px`
  })
}

const setDestoryClock = (element: HTMLElement, time = 3000) => {
  if (time === 0) return
  setTimeout(() => {
    destoryMessageElement(element)
  }, time)
}

function message(config: MessageProps) {
  const VNode = h(Message, {
    ...config,
    onClose(element: HTMLElement) {
      destoryMessageElement(element) // 关闭时销毁
    }
  })
  const container = document.createElement('div')
  container.setAttribute('class', 'f-message-container')
  document.body.append(container)
  messageInstanceList.push(container)
  container.style.top =
    MESSAGE_START_TOP +
    (messageInstanceList.length - 1) * (MESSAGE_HEIGHT + MESSAGE_GAP) +
    'px'
  render(VNode, container)
  setDestoryClock(
    container,
    config.duration !== undefined ? config.duration : 3000
  )
}

export const FMessage = (config: MessageProps | string) => {
  if (typeof config === 'string') config = { message: config } as MessageProps
  message(config)
}

FMessage.success = (msg: string) => message({ message: msg, type: 'success' })
FMessage.error = (msg: string) => message({ message: msg, type: 'error' })
FMessage.info = (msg: string) => message({ message: msg, type: 'info' })
FMessage.warning = (msg: string) => message({ message: msg, type: 'warning' })

declare module 'vue' {
  export interface GlobalComponents {
    FMessage: typeof FMessage
  }
}

export * from './src/message'

export default FMessage
