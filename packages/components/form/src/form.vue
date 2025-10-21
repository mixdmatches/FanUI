<template>
  <form :class="formClasses">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils/create'
import { computed, provide } from 'vue'
import { formProps, FormContext, FormContextKey } from './form'
import '../style/index'
import { FormItemContext, FormItemProp } from './form-item'
import { Value } from 'async-validator'
import { isArray } from '@fan-ui/utils/types'
import { debugWarn } from '@fan-ui/constans'

const bem = createNamespace('form')

defineOptions({
  name: 'f-form'
})

const props = defineProps(formProps)

const fields: FormItemContext[] = []

type Many<T> = T | ReadonlyArray<T>
const ensureArray = <T,>(arr: Many<T>): T[] => {
  if (!arr && (arr as unknown) !== 0) return []
  return isArray(arr) ? arr : [arr as T]
}

const filterFields = (fields: FormItemContext[], props: FormItemProp) => {
  const normalized = ensureArray(props)
  return normalized.length > 0
    ? fields.filter(field => field.prop && normalized.includes(field.prop))
    : fields
}

const resetFields: FormContext['resetFields'] = (properties = []) => {
  if (!props.model) {
    debugWarn('FForm', 'model is required for resetFields to work.')
    return
  }
  filterFields(fields, properties).forEach(field => field.resetField())
}

const clearValidate: FormContext['clearValidate'] = (props = []) => {
  filterFields(fields, props).forEach(field => field.clearValidate())
}

// form父级校验，在父级中调用所有儿子的校验方法
const validate = async (
  callback?: (isValid: boolean, errors?: Value) => void
) => {
  // 确保fields数组只包含有效的表单项（处理动态添加/删除的情况）
  const validFields = fields.filter(field => field.prop) // 只校验有prop的字段

  // 使用Promise.allSettled确保所有字段都完成校验，无论成功失败
  const results = await Promise.allSettled(
    validFields.map(field => field.validate('')) // 调用每个子组件的 validate 方法
  )

  // 收集所有错误
  const errors: Value = {}
  let isValid = true

  results.forEach(result => {
    if (result.status === 'rejected') {
      isValid = false
      const error = result.reason as Value
      if (error.fields) {
        errors.fields = { ...(errors.fields || {}), ...error.fields }
      }
    }
  })

  // 兼容callback和Promise两种调用方式
  if (callback) {
    callback(isValid, errors)
  }

  // 同时返回Promise，支持async/await调用
  if (isValid) {
    return Promise.resolve(true)
  } else {
    return Promise.reject(errors)
  }
}

const removeField = (context: FormItemContext) => {
  const index = fields.indexOf(context)
  if (index !== -1) {
    fields.splice(index, 1)
  }
}

const addField: FormContext['addField'] = context => {
  fields.push(context)
}

const context: FormContext = {
  ...props,
  addField,
  resetFields,
  clearValidate,
  validate,
  removeField
}

const formClasses = computed(() => [
  bem.b(),
  {
    [bem.m('inline')]: props.inline,
    [bem.m(`label-${props.labelPosition}`)]: props.labelPosition
  }
])

provide(FormContextKey, context)

defineExpose({
  validate,
  addField,
  resetFields,
  clearValidate,
  removeField
})
</script>
