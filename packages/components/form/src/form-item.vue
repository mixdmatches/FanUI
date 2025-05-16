<template>
  <div :class="formItemClasses">
    <label :class="bem.e('label')">
      <slot name="label" :label="label">
        {{ label }}
      </slot>
    </label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error">{{ validateMessage }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@Fan-ui/utils/create'
import { computed, inject, onMounted, provide, ref } from 'vue'
import type {
  FormItemValidateState,
  FormItemContext,
  FormItemRule,
  Arrayable
} from './form-item'
import { formItemProps, formItemContextKey } from './form-item'
import '../style/index'
import { FormContextKey } from './form'
import AsyncValidator, { Values } from 'async-validator'

const bem = createNamespace('form-item')

const props = defineProps(formItemProps)

const validateState = ref<FormItemValidateState>('')
const validateMessage = ref('')

const formContext = inject(FormContextKey)

const converArray = (
  rules: Arrayable<FormItemRule> | undefined
): FormItemRule[] => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : []
}

const _rules = computed(() => {
  const myRules: FormItemRule[] = converArray(props.rules) //自己的规则
  const formRules = formContext?.rules

  if (formRules && props.prop) {
    const _temp = formRules[props.prop]
    if (_temp) {
      myRules.push(...converArray(_temp))
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

const onValidationSuccesseded = () => {
  validateState.value = 'success'
  validateMessage.value = ''
}

const onValidationFailed = (error: Values) => {
  validateState.value = 'error'
  const { errors } = error
  validateMessage.value = errors ? errors[0].message : '校验失败'
}

const validate: FormItemContext['validate'] = async trigger => {
  // 拿到触发的时机，校验是否可以通过调用 callback 或者调用 promise.then方法
  const rules = getRuleFiltered(trigger)
  // rules 就是触发规则，trigger 就是触发时机
  // 需要找到对应的数据源，校验这个数据源
  const modelName = props.prop
  // 拿到校验器
  const validator = new AsyncValidator({
    [modelName ? String(modelName) : '']: rules
  })
  const model = formContext?.model
  // 确保 modelName 为字符串类型
  const modelNameStr = modelName ? String(modelName) : ''
  return validator
    .validate({ [modelNameStr]: model?.[modelNameStr] })
    .then(() => {
      onValidationSuccesseded()
      return true
    })
    .catch(err => {
      onValidationFailed(err)
      return Promise.reject(err)
    })
}

const context: FormItemContext = {
  ...props,
  validate
}

provide(formItemContextKey, context)

const formItemClasses = computed(() => [
  bem.b(),
  bem.is('success', validateState.value == 'success'),
  bem.is('error', validateState.value == 'error')
])

defineOptions({
  name: 'f-form-item',
  inheritAttrs: false
})

onMounted(() => {
  formContext?.addField(context) //将自己的上下文添加到父级
})
</script>
