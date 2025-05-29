<template>
  <label
    :class="[
      bem.b(),
      bem.m(size),
      bem.is('checked', model === actualValue),
      bem.is('disabled', !!isDisabled)
    ]"
  >
    <span
      :class="[
        bem.e('input'),
        bem.is('checked', model === actualValue),
        bem.is('disabled', !!isDisabled)
      ]"
    >
      <input
        ref="radioRef"
        :class="bem.e('original')"
        :name="name || radioGroupContext?.name"
        type="radio"
        :value="value"
        v-model="model"
        :checked="model === actualValue"
        :disabled="isDisabled"
        @change="handleChange"
        @click.stop
      />
      <span :class="bem.e('inner')"></span>
    </span>
    <span :class="bem.e('label')" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import '../style/index.ts'
import { computed, inject, nextTick, ref } from 'vue'
import { radioEmits, radioProps } from './radio'
import { isPropAbsent } from '@fan-ui/utils/types'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@fan-ui/constans'
import { radioGroupKey } from './constants'
import { createNamespace } from '@fan-ui/utils/create.js'

defineOptions({
  name: 'f-radio'
})

const bem = createNamespace('radio')

const radioGroupContext = inject(radioGroupKey, undefined)
const isGroup = computed(() => !!radioGroupContext)

const radioRef = ref<HTMLInputElement>()

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const actualValue = computed(() => {
  if (!isPropAbsent(props.value)) {
    return props.value
  }
  return props.label
})

const model = computed({
  get() {
    return isGroup.value ? radioGroupContext?.modelValue : props.modelValue
  },
  set(val) {
    if (isGroup.value) {
      radioGroupContext!.changeEvent(val)
    } else {
      emit(UPDATE_MODEL_EVENT, val)
    }
    radioRef.value!.checked = props.modelValue === actualValue.value
  }
})

function handleChange() {
  nextTick(() => {
    emit(CHANGE_EVENT, model.value)
  })
}

const size = computed(() => {
  return props.size || radioGroupContext?.size
})

const isDisabled = computed(() => {
  return props.disabled || radioGroupContext?.disabled
})
</script>
