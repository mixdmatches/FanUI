<template>
  <label :class="compKls">
    <span :class="spanKls">
      <input
        v-model="model"
        :value="value"
        @change="handleChange"
        :class="bem.e('original')"
        type="checkbox"
        :checked="isChecked"
        :name="name"
        :disabled="isDisabled"
      />
      <span :class="bem.e('inner')"></span>
    </span>
    <span :class="bem.e('label')" v-if="hasOwnLabel">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import '../style/index'
import { computed } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import { createNamespace } from '@fan-ui/utils/create'
import { useCheckbox } from './use-checkbox'

defineOptions({ name: 'f-checkbox' })

const bem = createNamespace('checkbox')

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
const slots = defineSlots()

const { model, isChecked, isDisabled, hasOwnLabel, handleChange, size } =
  useCheckbox(props, emit, slots)

const compKls = computed(() => [
  bem.b(),
  bem.m(size.value),
  bem.is('checked', isChecked.value),
  bem.is('disabled', isDisabled.value),
  bem.is('bordered', props.border)
])

const spanKls = computed(() => [
  bem.e('input'),
  bem.is('checked', isChecked.value),
  bem.is('disabled', isDisabled.value),
  bem.is('indeterminate', props.indeterminate)
])
</script>
