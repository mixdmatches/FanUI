import { mount } from '@vue/test-utils'
import Input from '../src/input.vue'
import { describe, expect, test } from 'vitest'
import { Calendar, Search } from '@icon-park/vue-next'

describe('测试input组件', () => {
  // 测试组件是否能正常渲染
  test('渲染', () => {
    const wrapper = mount(Input)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试 v-model 绑定
  test('v-model 绑定', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test'
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('test')

    await input.setValue('new test')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new test'])
  })

  // 测试 placeholder 属性
  test('placeholder 属性', () => {
    const placeholder = '请输入'
    const wrapper = mount(Input, {
      props: {
        placeholder
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe(placeholder)
  })

  // 测试 disabled 属性
  test('disabled 属性', () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true
      }
    })
    const input = wrapper.find('input')
    expect(input.element.disabled).toBe(true)
  })

  // 测试 clearable 属性
  test('clearable 属性', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true
      }
    })
    const clearIcon = wrapper.find('.f-input__clear')
    expect(clearIcon.exists()).toBe(true)

    await clearIcon.trigger('click')
    expect(wrapper.emitted('clear')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([''])
  })

  // 测试 showPassword 属性
  test('showPassword 属性', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'password',
        showPassword: true
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('password')

    const passwordIcon = wrapper.find('.f-input__password')
    await passwordIcon.trigger('click')
    expect(input.attributes('type')).toBe('text')
  })

  // 测试 prefixIcon 和 suffixIcon 属性
  test('prefixIcon 和 suffixIcon 属性', () => {
    const wrapper = mount(Input, {
      props: {
        prefixIcon: Calendar,
        suffixIcon: Search
      }
    })
    const prefixIcon = wrapper.find(
      '.f-input__prefix .f-input__prefix-inner .f-input__icon'
    )
    const suffixIcon = wrapper.find(
      '.f-input__suffix .f-input__suffix-inner .f-input__icon'
    )
    expect(prefixIcon.exists()).toBe(true)
    expect(suffixIcon.exists()).toBe(true)
  })

  // 测试 focus 和 blur 事件
  test('focus 和 blur 事件', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()

    await input.trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  // 测试 input 和 change 事件
  test('input 和 change 事件', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.setValue('test')
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')![0]).toEqual(['test'])

    await input.trigger('change')
    expect(wrapper.emitted('change')).toBeTruthy()
    expect(wrapper.emitted('change')![0]).toEqual(['test'])
  })
})
