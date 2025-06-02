import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FForm from '../src/form.vue'
import FFormItem from '../src/form-item.vue'
import Input from '../../input/src/input.vue'
import { reactive, nextTick } from 'vue'
import 'vue'

describe('FForm 组件测试', () => {
  // 测试组件是否能正常渲染
  it('应该正常渲染', () => {
    const wrapper = mount(FForm, {
      props: {
        model: {},
        rules: {}
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  // 测试表单验证方法
  it('应该正确执行表单验证', async () => {
    const formModel = reactive({
      name: ''
    })
    const rules = {
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
    }

    const wrapper = mount(FForm, {
      props: {
        model: formModel,
        rules
      },
      slots: {
        default: () => (
          <FFormItem prop="name" label="姓名">
            <Input v-model={formModel.name} />
          </FFormItem>
        )
      },
      global: {
        components: { FFormItem, Input }
      }
    })

    // 初始为空，验证不通过
    let valid = true
    await wrapper.vm.validate((isValid: boolean) => {
      valid = isValid
    })
    expect(valid).toBe(false)

    // 填写内容后，验证通过
    formModel.name = '张三'
    await wrapper.vm.validate((isValid: boolean) => {
      valid = isValid
    })
    expect(valid).toBe(true)
  })
})

describe('FFormItem 组件测试', () => {
  // 测试组件是否能正常渲染
  it('应该正常渲染', () => {
    const wrapper = mount(FFormItem, {
      props: {
        prop: 'field',
        label: '测试字段'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  // 测试表单项验证方法
  it('应该正确执行表单项验证', async () => {
    const mockModel = reactive({ field: '' })
    const mockRules = {
      field: [{ required: true, message: '该字段必填', trigger: 'blur' }]
    }

    const wrapper = mount(FForm, {
      props: {
        model: mockModel,
        rules: mockRules
      },
      slots: {
        default: () => (
          <FFormItem prop="field" label="测试字段">
            <Input v-model={mockModel.field} />
          </FFormItem>
        )
      },
      global: {
        components: { FFormItem, Input }
      }
    })

    // 获取 FFormItem 实例
    const formItemWrapper = wrapper.findComponent(FFormItem)

    // 初始为空，校验不通过
    let valid = true
    await formItemWrapper.vm.validate('blur', (isValid: boolean) => {
      valid = isValid
    })
    expect(valid).toBe(false)

    // 填写内容后，校验通过
    mockModel.field = '有值'
    await nextTick()
    await formItemWrapper.vm.validate('blur', (isValid: boolean) => {
      valid = isValid
    })
    expect(valid).toBe(true)
  })
})
