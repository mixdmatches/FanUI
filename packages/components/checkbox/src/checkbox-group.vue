<template>
  <div :class="bem.b('group')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils/create'
import { computed, inject, provide } from 'vue'
import {
  checkboxGroupContextKey,
  checkboxGroupEmits,
  checkboxGroupProps,
  type CheckboxGroupValueType
} from './checkbox-group'
import { formItemContextKey } from '../../form/src/form-item'

defineOptions({ name: 'f-checkbox-group' })

const formItemContext = inject(formItemContextKey, undefined)

const bem = createNamespace('checkbox-group')

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  }
})

const changeEvent = (val: CheckboxGroupValueType) => {
  emit('update:modelValue', val)
  emit('change', val)
  formItemContext?.validate('change')
}

// 提供给checkbox的一些值和方法
provide(checkboxGroupContextKey, {
  modelValue,
  disabled: props.disabled,
  size: props.size,
  changeEvent
})
</script>
