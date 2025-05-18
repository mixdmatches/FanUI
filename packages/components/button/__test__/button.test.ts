import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import button from '../src/button.vue'

describe('测试button组件', () => {
  it('slot-default', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'Hello world'
      }
    })
    expect(wrapper.text()).toContain('Hello world')
  })
  it('class-primary', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('f-button--primary')
  })
})
