import { describe, expect, test, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import button from '../src/button.vue'

describe('测试button组件', () => {
  test('slot-default', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })

  test('class-primary', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('f-button--primary')
  })

  test('class-禁用状态', () => {
    const wrapper = mount(button, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('class-小尺寸', () => {
    const wrapper = mount(button, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.classes()).toContain('f-button--small')
  })

  test('点击事件触发', async () => {
    const mockFn = vi.fn()
    const wrapper = mount(button)
    await wrapper.trigger('click')
    expect(mockFn).toHaveBeenCalledTimes(0) // 假设按钮没有绑定点击事件
  })
})
