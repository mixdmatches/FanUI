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
import { computed, provide, ref } from 'vue'
import type { FormItemValidateState, FormItemContext } from './form-item'
import { formItemProps, formItemContextKey } from './form-item'
import '../style/index'
const bem = createNamespace('form-item')

const props = defineProps(formItemProps)

const validateState = ref<FormItemValidateState>('')
const validateMessage = ref('校验失败')

const _rules = computed(() => {
  const rules = props.rules
    ? Array.isArray(props.rules)
      ? props.rules
      : [props.rules]
    : []
  return rules
})

const getRuleFiltered = (trigger: string) => {
  const rules = _rules.value
  return rules.filter(rule => {
    if (!rule.trigger || !trigger) return true
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger)
    }
  })
}

const validate: FormItemContext['validate'] = async (trigger, _callback?) => {
  const rules = getRuleFiltered(trigger)
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
</script>
