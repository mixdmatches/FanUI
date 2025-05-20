import { mount } from '@vue/test-utils'
import Checkbox from '../src/checkbox.vue'
import CheckboxGroup from '../src/checkbox-group.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import { describe, expect, test } from 'vitest'

describe('测试checkbox组件', () => {
  // 测试组件是否能正常渲染
  test('渲染', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试选中状态
  test('选中状态', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true
      }
    })
    const input = wrapper.find('input')
    expect(input.element.checked).toBe(true)
  })

  // 测试禁用状态
  test('禁用状态', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true
      }
    })
    const input = wrapper.find('input')
    expect(input.element.disabled).toBe(true)
  })

  // 测试 change 事件
  test('change 事件', async () => {
    const wrapper = mount(Checkbox)
    const input = wrapper.find('input')
    await input.setValue(true)
    expect(wrapper.emitted('change')).toBeTruthy()
    const changeEvents = wrapper.emitted('change')
    if (changeEvents) {
      expect(changeEvents[0]).toEqual([true])
    }
  })
})

describe('测试checkbox-group组件', () => {
  // 测试组件是否能正常渲染
  test('渲染', () => {
    const wrapper = mount(CheckboxGroup)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试选中值绑定
  test('选中值绑定', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: ['value1']
      },
      slots: {
        default: `
          <Checkbox label="value1" />
          <Checkbox label="value2" />
        `,
        Checkbox
      }
    })
    expect(wrapper.props('modelValue')).toEqual(['value1'])
  })

  // 测试 change 事件
  test('change 事件', async () => {
    const wrapper = mount(CheckboxGroup, {
      slots: {
        default: `
          <Checkbox label="value1" />
          <Checkbox label="value2" />
        `,
        Checkbox
      }
    })

    // 找到第一个复选框的输入元素
    const firstCheckbox = wrapper.find('input[value="value1"]')
    await firstCheckbox.setValue(true)

    expect(wrapper.emitted('change')).toBeTruthy()
    const changeEvents = wrapper.emitted('change')
    if (changeEvents) {
      expect(changeEvents[0]).toEqual([['value1']])
    }
  })
})

describe('测试checkbox-button组件', () => {
  // 测试组件是否能正常渲染
  test('渲染', () => {
    const wrapper = mount(CheckboxButton)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试选中状态
  test('选中状态', async () => {
    const wrapper = mount(CheckboxButton, {
      props: {
        modelValue: true
      }
    })
    const input = wrapper.find('input')
    expect(input.element.checked).toBe(true)
  })

  // 测试禁用状态
  test('禁用状态', async () => {
    const wrapper = mount(CheckboxButton, {
      props: {
        disabled: true
      }
    })
    const input = wrapper.find('input')
    expect(input.element.disabled).toBe(true)
  })

  // 测试 change 事件
  test('change 事件', async () => {
    const wrapper = mount(CheckboxButton)
    const input = wrapper.find('input')
    await input.setValue(true)
    expect(wrapper.emitted('change')).toBeTruthy()
    const changeEvents = wrapper.emitted('change')
    if (changeEvents) {
      expect(changeEvents[0]).toEqual([true])
    }
  })
})
