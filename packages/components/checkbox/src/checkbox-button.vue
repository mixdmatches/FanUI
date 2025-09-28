<template>
  <label :class="compKls">
    <input
      :class="bem.e('original')"
      type="checkbox"
      :value="value"
      v-model="model"
      :name="name"
      :disabled="isDisabled"
      :label="label"
      @change="handleChange"
    />
    <span :class="spanKls" v-if="slots.default || label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { checkboxEmits, checkboxProps } from './checkbox'
import { computed, useSlots } from 'vue'
import { useCheckbox } from './use-checkbox'
import { createNamespace } from '@fan-ui/utils/create'

defineOptions({
  name: 'f-checkbox-button'
})

const bem = createNamespace('checkbox')

const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)
const slots = useSlots()

const { model, isChecked, isDisabled, handleChange, size } = useCheckbox(
  props,
  emits,
  slots
)

const compKls = computed(() => [
  bem.b('button'),
  bem.bm('button', size.value),
  bem.is('checked', isChecked.value),
  bem.is('disabled', isDisabled.value)
])

const spanKls = computed(() => [bem.be('button', 'inner')])
</script>
