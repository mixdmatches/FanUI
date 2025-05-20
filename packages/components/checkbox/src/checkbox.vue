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
import { computed, inject } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import { createNamespace } from '@fan-ui/utils/create'
import '../style/index'
import { isArray, isBoolean } from '@fan-ui/utils/types'
import { checkboxGroupContextKey } from './checkbox-group'

defineOptions({ name: 'f-checkbox' })

const bem = createNamespace('checkbox')

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)
const slots = defineSlots()

// 注入checkbox-group的值
const checkboxGroup = inject(checkboxGroupContextKey, undefined)
const isGroup = computed(() => !!checkboxGroup)

const model = computed({
  get() {
    // group模式下，需要返回checkboxGroup的modelValue，否则返回props.modelValue
    return isGroup.value ? checkboxGroup?.modelValue?.value : props.modelValue
  },
  set(val) {
    if (isGroup && isArray(val)) {
      checkboxGroup?.changeEvent?.(val)
    } else {
      emit('update:modelValue', val)
    }
  }
})

// 处理不同绑定值的选中状态
const isChecked = computed(() => {
  const value = model.value
  const checked = props.checked
  if (checked) {
    return checked
  }
  if (isBoolean(value)) {
    return value
  } else if (isArray(value)) {
    return value.includes(props.label) || value.includes(props.value)
  } else {
    return !!value
  }
})

// 处理禁用状态
const isDisabled = computed(() =>
  checkboxGroup?.disabled ? checkboxGroup.disabled : props.disabled
)

// 没传label也没有默认插槽
const hasOwnLabel = computed<boolean>(() => {
  return !!(slots.default || props.label)
})

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('change', target.checked)
}

// 计算大小，优先级：组件props > 组件group的size > 组件的默认size
const size = computed(() => {
  return checkboxGroup?.size == 'default' ? checkboxGroup.size : props.size
})

const compKls = computed(() => [
  bem.b(),
  bem.m(size.value),
  bem.is('checked', isChecked.value),
  bem.is('disabled', isDisabled.value)
])

const spanKls = computed(() => [
  bem.e('input'),
  bem.is('checked', isChecked.value),
  bem.is('disabled', isDisabled.value),
  bem.is('indeterminate', props.indeterminate)
])
</script>
