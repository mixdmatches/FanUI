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
  it('测试 Radio 组件选中状态', async () => {
    // 使用 ref 作为 v-model
    const { ref } = await import('vue')
    const option = ref('option1')
    const wrapper = mount(
      () => (
        <RadioGroup v-model={option.value}>
          <Radio value="option1" label="option1" />
          <Radio value="option2" label="option2" />
        </RadioGroup>
      ),
      {
        global: {
          components: { RadioGroup, Radio }
        }
      }
    )

    // 检查第一个 Radio 是否被选中
    const radios = wrapper.findAllComponents(Radio)
    expect(radios[0].classes()).toContain('is-checked')
    expect(radios[1].classes()).not.toContain('is-checked')

    // 模拟点击第二个 Radio
    await radios[1].find('input').setValue(true)
    // 等待响应式更新
    await wrapper.vm?.$nextTick?.()

    // 断言第二个 Radio 被选中
    expect(radios[1].classes()).toContain('is-checked')
    expect(radios[0].classes()).not.toContain('is-checked')
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
})
