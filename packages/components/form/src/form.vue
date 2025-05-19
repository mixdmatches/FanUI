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
import { FormItemContext } from './form-item'
import { Value } from 'async-validator'

const bem = createNamespace('form')

defineOptions({
  name: 'f-form'
})

const props = defineProps(formProps)

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

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = context => {
  fields.push(context)
}

const context: FormContext = {
  ...props,
  addField
}

const formClasses = computed(() => [bem.b()])

provide(FormContextKey, context)

defineExpose({
  validate
})
</script>
