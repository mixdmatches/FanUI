<template>
  <div :class="bem.b('group')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@fan-ui/constans'
import { nextTick, provide, reactive, toRefs } from 'vue'
import { radioGroupKey } from './constants'
import {
  radioGroupEmits,
  RadioGroupProps,
  radioGroupProps
} from './radio-group'
import { createNamespace } from '@fan-ui/utils/create'

defineOptions({
  name: 'f-radio-group'
})

const bem = createNamespace('radio-group')

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => emit(CHANGE_EVENT, value))
}

provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent
  })
)
</script>
