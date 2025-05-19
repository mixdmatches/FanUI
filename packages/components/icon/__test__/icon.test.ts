import { mount } from '@vue/test-utils'
import Icon from '../src/icon.vue'
import { describe, expect, test } from 'vitest'
import { Search } from '@icon-park/vue-next'

describe('测试icon组件', () => {
  // 测试 icon 组件的基本渲染
  test('renders icon component', () => {
    const wrapper = mount(Icon)
    expect(wrapper.exists()).toBe(true)
  })

  // 测试 size 属性是否生效
  test('applies size prop correctly', () => {
    const size = 24
    const wrapper = mount(Icon, {
      props: {
        size: size
      }
    })
    expect(wrapper.attributes('style')).toContain(`font-size: ${size}px`)
  })

  // 测试 color 属性是否生效
  test('applies color prop correctly', () => {
    const color = 'red'
    const wrapper = mount(Icon, {
      props: {
        color: color
      }
    })
    expect(wrapper.attributes('style')).toContain(`color: ${color}`)
  })

  // 测试插槽内容是否正确渲染
  test('renders slot content', () => {
    const wrapper = mount(Icon, {
      slots: {
        default: () => mount(Search).element
      }
    })
    const searchComponent = wrapper.findComponent(Search)
    expect(searchComponent.exists()).toBe(true)
  })
})
