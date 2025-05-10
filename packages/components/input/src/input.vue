<template>
  <div :class="containerKls" :style="containerStyle">
    <div v-if="slots.prepend" :class="[bem.be('group', 'prepend')]">
      <slot name="prepend"></slot>
    </div>

    <div :class="wrapperKls">
      <span v-if="slots.prefix" :class="[bem.e('prefix')]">
        <span :class="[bem.e('prefix-inner')]">
          <slot name="prefix"></slot>
        </span>
      </span>
      <input
        ref="inputRef"
        :type="type"
        v-bind="attrs"
        :class="[bem.e('inner')]"
        :placeholder="placeholder"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <span v-if="slots.suffix" :class="[bem.e('suffix')]">
        <span :class="bem.e('suffix-inner')">
          <slot name="suffix"></slot>
        </span>
      </span>
    </div>

    <div v-if="slots.append" :class="[bem.be('group', 'append')]">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
  StyleValue,
  useAttrs,
  useSlots,
  watch
} from 'vue'
import { createNamespace } from '@Fan-ui/utils/create'
import { inputProps, inputEmits } from './input'
import '../style/index'
const slots = useSlots()
const bem = createNamespace('input')

defineOptions({
  name: 'f-input',
  inheritAttrs: false
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const inputRef = ref<HTMLInputElement>()

const containerKls = computed(() => {
  return [bem.b()]
})

const wrapperKls = computed(() => {
  return [bem.e('wrapper')]
})

const attrs = useAttrs()

const containerStyle = computed<StyleValue>(() => [attrs.style as StyleValue])

watch(
  () => props.modelValue,
  () => {
    setNativeInputValue()
  }
)

const setNativeInputValue = () => {
  if (!inputRef.value) return
  inputRef.value.value = String(props.modelValue) || ''
}

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
  emit('input', value)
}
const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('change', value)
}
const handleBlur = (e: FocusEvent) => {
  emit('blur', e)
}
const handleFocus = (e: FocusEvent) => {
  emit('focus', e)
}
onMounted(() => {
  setNativeInputValue()
})
</script>
