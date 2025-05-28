import { mount } from '@vue/test-utils'
import Radio from '../src/radio.vue'
import RadioGroup from '../src/radio-group.vue'
import { describe, expect, it } from 'vitest'

describe('Radio 组件', () => {
  // 测试 Radio 组件是否正确渲染
  it('渲染Radio组件', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'option1'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  // 测试 Radio 组件选中状态
  it('测试 Radio 组件选中状态', () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: 'option1',
        label: 'option1'
      }
    })
    // 点击
    wrapper.find('input').trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
  })

  // 测试 Radio 组件点击事件
  it('测试 Radio 组件点击事件', async () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'option1'
      }
    })
    await wrapper.find('input').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['option1'])
  })
})

describe('RadioGroup 组件', () => {
  // 测试 RadioGroup 组件是否正确渲染
  it('测试 RadioGroup 组件是否正确渲染', () => {
    const wrapper = mount(RadioGroup, {
      slots: {
        default: () => [
          mount(Radio, {
            props: {
              label: 'option1'
            }
          }).element,
          mount(Radio, {
            props: {
              label: 'option2'
            }
          }).element
        ]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  // 测试 RadioGroup 组件选中状态
  it('测试 RadioGroup 组件选中状态', async () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: 'option1'
      },
      slots: {
        default: () => [
          mount(Radio, {
            props: {
              label: 'option1'
            }
          }).element,
          mount(Radio, {
            props: {
              label: 'option2'
            }
          }).element
        ]
      }
    })
    const radio2 = wrapper.findAllComponents(Radio)[1]
    await radio2.find('input').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['option2'])
  })
})
