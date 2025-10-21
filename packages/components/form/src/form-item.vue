<!-- eslint-disable no-unused-vars -->
<template>
  <div :class="formItemClasses" class="asterisk-left">
    <label :class="bem.e('label')">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div :class="bem.e('content')" :style="contentStyle">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error">{{ validateMessage }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils/create'
import {
  computed,
  inject,
  nextTick,
  onMounted,
  onBeforeUnmount,
  provide,
  ref,
  useSlots
} from 'vue'
import type {
  FormItemValidateState,
  FormItemContext,
  FormItemRule,
  ArrayAble
} from './form-item'
import { formItemProps, formItemContextKey } from './form-item'
import '../style/index'
import { FormContextKey } from './form'
import AsyncValidator, { Values } from 'async-validator'
import { clone } from 'lodash-unified'
import { getProp } from '@fan-ui/utils'

const bem = createNamespace('form-item')

const props = defineProps(formItemProps)

const validateState = ref<FormItemValidateState>('')
const validateMessage = ref('')

let initialValue = undefined

const formContext = inject(FormContextKey)

// 存储当前字段的引用，用于在卸载时从表单中移除
let fieldRef: FormItemContext | null = null

const convertArray = (
  rules: ArrayAble<FormItemRule> | undefined
): FormItemRule[] => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : []
}

const _rules = computed(() => {
  const myRules: FormItemRule[] = convertArray(props.rules) //自己的规则
  const formRules = formContext?.rules

  if (formRules && props.prop) {
    const _temp = formRules[props.prop]
    if (_temp) {
      myRules.push(...convertArray(_temp))
    }
  }

  return myRules
})

const getRuleFiltered = (trigger: string) => {
  const rules = _rules.value
  // 过滤规则
  return rules.filter(rule => {
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger)
    } else {
      return rule.trigger == trigger
    }
  })
}

const onValidationSuccess = () => {
  validateState.value = 'success'
  validateMessage.value = ''
}

const onValidationFailed = (error: Values) => {
  validateState.value = 'error'
  const { errors } = error
  validateMessage.value = errors ? errors[0].message : '校验失败'
}

const fieldValue = computed(() => {
  const model = formContext?.model
  if (!model || !props.prop) {
    return
  }
  return getProp(model, props.prop).value
})

const validate: FormItemContext['validate'] = async trigger => {
  const rules = getRuleFiltered(trigger)
  // 需要找到对应的数据源，校验这个数据源
  const modelName = props.prop ? String(props.prop) : ''
  // 拿到校验器
  const validator = new AsyncValidator({
    [modelName]: rules
  })

  return validator
    .validate({ [modelName]: fieldValue.value })
    .then(() => {
      onValidationSuccess()
      return true
    })
    .catch(err => {
      onValidationFailed(err)
      return Promise.reject(err)
    })
}

const clearValidate: FormItemContext['clearValidate'] = () => {
  validateMessage.value = ''
  validateState.value = ''
}

const resetField: FormItemContext['resetField'] = async () => {
  validateState.value = ''
  const model = formContext?.model
  if (!model || !props.prop) return

  const computedValue = getProp(model, props.prop)

  computedValue.value = clone(initialValue)

  await nextTick()
  clearValidate()
}

const context: FormItemContext = {
  ...props,
  validate,
  clearValidate,
  resetField
}

provide(formItemContextKey, context)

const slots = useSlots()

const labelPosition = computed(
  () => props.labelPosition || formContext?.labelPosition
)

const isRequired = computed(() => {
  return _rules.value.some(rule => rule.required)
})

const formItemClasses = computed(() => [
  bem.b(),
  bem.is('success', validateState.value == 'success'),
  bem.is('error', validateState.value == 'error'),
  {
    [bem.m(`label-${labelPosition.value}`)]: labelPosition.value
  },
  bem.is('required', isRequired.value)
])

const contentStyle = computed(() => {
  if (labelPosition.value === 'top' || formContext?.inline) {
    return {}
  }
  if (!props.label && !props.labelWidth) {
    return {}
  }
  const labelWidth = props.labelWidth || formContext?.labelWidth || ''
  if (!props.label && !slots.label) {
    return { marginLeft: labelWidth }
  }
  return {}
})

defineOptions({
  name: 'f-form-item',
  inheritAttrs: false
})

onMounted(() => {
  fieldRef = context
  formContext?.addField(context) //将自己的上下文添加到父级
  initialValue = clone(fieldValue.value)
})

// 当组件卸载时，从表单的字段列表中移除自己
onBeforeUnmount(() => {
  if (formContext && fieldRef) {
    formContext?.removeField(fieldRef)
  }
})
</script>
