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
import { Arrayable, FormItemContext, FormItemProp } from './form-item'
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

const filterFields = (
  fields: FormItemContext[],
  props: Arrayable<FormItemProp>
) => {
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
  callback?: (valid: boolean, fields?: Value) => void
) => {
  let errors: Value = {}
  for (const field of fields) {
    try {
      await field.validate('') // 调用每个子组件的 validate 方法
    } catch (error) {
      errors = { ...errors, ...(error as Value).fields }
    }
  }
  if (Object.keys(errors).length === 0) {
    return callback?.(true)
  } else {
    if (callback) {
      callback?.(false, errors)
    } else {
      return Promise.reject(errors)
    }
  }
}

const addField: FormContext['addField'] = context => {
  fields.push(context)
}

const context: FormContext = {
  ...props,
  addField,
  resetFields,
  clearValidate
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
  clearValidate
})
</script>
