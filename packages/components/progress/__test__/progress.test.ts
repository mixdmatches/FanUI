import { mount } from '@vue/test-utils'
import Progress from '../src/progress.vue'
import { describe, it, expect } from 'vitest'

describe('Progress 组件', () => {
  it('基础渲染', () => {
    const wrapper = mount(Progress, {
      props: { percentage: 50 }
    })
    expect(wrapper.classes()).toContain('f-progress')
    // 线性进度条
    expect(wrapper.find('.f-progress--line').exists()).toBe(true)
    // 进度文本
    expect(wrapper.text()).toContain('50%')
  })

  it('支持 type="circle"', () => {
    const wrapper = mount(Progress, {
      props: { percentage: 70, type: 'circle' }
    })
    expect(wrapper.find('.f-progress--circle').exists()).toBe(true)
    expect(wrapper.text()).toContain('70%')
  })

  it('支持 status', () => {
    const wrapper = mount(Progress, {
      props: { percentage: 100, status: 'success' }
    })
    expect(wrapper.find('.is-success').exists()).toBe(true)
  })

  it('支持自定义 color', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 20,
        color: '#f56c6c'
      }
    })
    // 检查 bar 的背景色
    const bar = wrapper.find('.f-progress-bar__inner')
    expect(bar.attributes('style')).toContain(
      'background-color: rgb(245, 108, 108)'
    )
  })

  it('支持 showText=false', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 60,
        showText: false
      }
    })
    expect(wrapper.find('.f-progress__text').exists()).toBe(false)
  })

  it('支持自定义 format', () => {
    const wrapper = mount(Progress, {
      props: {
        percentage: 100,
        format: (percentage: number) =>
          percentage === 100 ? 'Full' : `${percentage}%`
      }
    })
    expect(wrapper.text()).toContain('Full')
  })
})
