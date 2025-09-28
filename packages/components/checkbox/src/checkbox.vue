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
      <span :class="[bem.e('inner')]">
        <svg viewBox="0 0 64 64" :class="bem.m('check-icon')">
          <path
            d="M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
          ></path>
        </svg>
      </span>
    </span>
    <span :class="bem.e('label')" v-if="hasOwnLabel">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
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
