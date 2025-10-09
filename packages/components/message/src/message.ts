import { Message } from '@icon-park/vue-next'
import { MessageProps } from './props'
import { h, render } from 'vue'

let messageInstanceList: Array<HTMLElement> = []

const MESSAGE_START_TOP = 56 //起始高度
const MESSAGE_HEIGHT = 44 // 消息高度
const MESSAGE_GAP = 16 // 消息间距

const destroyMessageElement = (element: HTMLElement) => {
  if (!element.parentElement?.contains(element)) return
  element.parentElement.removeChild(element)
  messageInstanceList = messageInstanceList.filter(item => item !== element)
  messageInstanceList.forEach((item, index) => {
    item.style.top = `${MESSAGE_START_TOP + MESSAGE_HEIGHT * index + MESSAGE_GAP * index}px`
  })
}

const setDestroyClock = (element: HTMLElement, time = 3000) => {
  if (time === 0) return
  setTimeout(() => {
    destroyMessageElement(element)
  }, time)
}

function message(config: MessageProps) {
  const VNode = h(Message, {
    ...config,
    onClose(element: HTMLElement) {
      destroyMessageElement(element) // 关闭时销毁
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
  setDestroyClock(
    container,
    config.duration !== undefined ? config.duration : 3000
  )
}

const FMessage = (config: MessageProps | string) => {
  if (typeof config === 'string') config = { message: config } as MessageProps
  message(config)
}

FMessage.success = (msg: string) => message({ message: msg, type: 'success' })
FMessage.error = (msg: string) => message({ message: msg, type: 'error' })
FMessage.info = (msg: string) => message({ message: msg, type: 'info' })
FMessage.warning = (msg: string) => message({ message: msg, type: 'warning' })

export { FMessage }
