import { mount } from '@vue/test-utils'
import Checkbox from '../src/checkbox.vue'
import { describe, expect, test } from 'vitest'

describe('测试checkbox组件', () => {
  // 测试组件是否能正常渲染
  test('渲染', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试默认是否未选中
  // test('默认未选中', () => {
  //   const wrapper = mount(Checkbox)
  //   const input = wrapper.find('input[type="checkbox"]')
  //   expect(input.element.checked).toBe(false)
  // })

  // // 测试通过 v-model 绑定是否能正确选中
  // test('通过 v-model 绑定选中', async () => {
  //   const wrapper = mount(Checkbox, {
  //     props: {
  //       modelValue: true
  //     }
  //   })
  //   const input = wrapper.find('input[type="checkbox"]')
  //   expect(input.element.checked).toBe(true)
  // })

  // 测试点击复选框是否触发 change 事件
  test('点击复选框触发 change 事件', async () => {
    const wrapper = mount(Checkbox)
    const input = wrapper.find('input[type="checkbox"]')
    await input.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    const emittedEvents = wrapper.emitted('update:modelValue')
    if (emittedEvents) {
      expect(emittedEvents[0]).toEqual([true])
    } else {
      // 如果事件未触发，抛出错误
      expect.fail('"update:modelValue" 事件未触发')
    }
  })
})
