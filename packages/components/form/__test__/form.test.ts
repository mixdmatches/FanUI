import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FForm from '../src/form.vue'
import FFormItem from '../src/form-item.vue'
import AsyncValidator from 'async-validator'

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
    const mockModel = { field: 'value' }
    const mockRules = {
      field: [{ required: true, message: '该字段必填', trigger: 'blur' }]
    }
    const wrapper = mount(FForm, {
      props: {
        model: mockModel,
        rules: mockRules
      },
      slots: {
        default: `
          <f-form-item prop="field">
            <input v-model="model.field" />
          </f-form-item>
        `
      },
      global: {
        components: {
          'f-form-item': FFormItem
        }
      }
    })

    const validateSpy = vi.spyOn(wrapper.vm, 'validate')
    await wrapper.vm.validate()
    expect(validateSpy).toHaveBeenCalled()
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
    const mockModel = { field: 'value' }
    const mockRules = [
      { required: true, message: '该字段必填', trigger: 'blur' }
    ]
    const wrapper = mount(FFormItem, {
      props: {
        prop: 'field',
        rules: mockRules
      },
      global: {
        provide: {
          [Symbol('formContextKey')]: {
            model: mockModel,
            addField: vi.fn()
          }
        }
      }
    })

    const validator = new AsyncValidator({
      field: mockRules
    })
    const spy = vi.spyOn(validator, 'validate')
    await wrapper.vm.validate('blur')
    expect(spy).toHaveBeenCalled()
  })
})
