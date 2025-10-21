import { mount } from '@vue/test-utils'
import Message from '../src/message.vue'
import { describe, expect, it } from 'vitest'
import { MessageProps } from '../src/props'

describe('Message 组件测试', () => {
  // 测试组件是否能正常渲染
  it('应该正常渲染', () => {
    const wrapper = mount(Message, {
      props: {
        message: '测试消息',
        type: 'info'
      } as MessageProps
    })
    expect(wrapper.exists()).toBe(true)
  })

  // 测试不同类型的消息图标是否正确显示
  it('应该显示不同类型的消息图标', () => {
    const types = ['info', 'success', 'warning', 'error']
    types.forEach(type => {
      const wrapper = mount(Message, {
        props: {
          message: '测试消息',
          type
        } as MessageProps
      })
      expect(wrapper.find(`.f-message--${type}`).exists()).toBe(true)
    })
  })

  // 测试关闭按钮是否能正常触发关闭事件
  it('点击关闭按钮应该触发关闭事件', async () => {
    // const closeMock = vi.fn()
    const wrapper = mount(Message, {
      props: {
        message: '测试消息',
        type: 'info',
        showClose: true
      } as MessageProps
    })

    await wrapper.find('.f-message__closeBtn').trigger('click')
    const containerAfterClick = wrapper.find('.f-message-container')
    expect(containerAfterClick.exists()).toBe(false)
  })

  // 测试 plain 属性是否生效
  it('plain 属性应该生效', () => {
    const wrapper = mount(Message, {
      props: {
        message: '测试消息',
        type: 'info',
        plain: true
      } as MessageProps
    })
    expect(wrapper.find('.f-message').classes()).toContain('is-plain')
  })
})
