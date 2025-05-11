<template>
  <div :class="containerKls" :style="containerStyle">
    <div v-if="slots.prepend" :class="[bem.be('group', 'prepend')]">
      <slot name="prepend"></slot>
    </div>

    <div :class="wrapperKls">
      <span v-if="slots.prefix || prefixIcon" :class="[bem.e('prefix')]">
        <span :class="[bem.e('prefix-inner')]">
          <slot name="prefix"></slot>
          <f-icon v-if="prefixIcon" :class="bem.e('icon')">
            <component :is="prefixIcon" />
          </f-icon>
        </span>
      </span>
      <input
        ref="inputRef"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        v-bind="attrs"
        :disabled="disabled"
        :autofocus="autofocus"
        :class="[bem.e('inner')]"
        :placeholder="placeholder"
        @input="handleInput"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <!-- suffix -->
      <span v-if="suffixVisible || suffixIcon" :class="[bem.e('suffix')]">
        <span :class="bem.e('suffix-inner')">
          <template v-if="!showPwdVisible || !showClear">
            <slot name="suffix"></slot>
            <f-icon v-if="suffixIcon" :class="bem.e('icon')">
              <component :is="suffixIcon" />
            </f-icon>
          </template>
          <!-- showpassword -->
          <f-icon
            @click="hendlePasswordVisible"
            :class="[bem.e('icon'), bem.e('password')]"
            v-if="showPwdVisible"
          >
            <preview-close theme="outline" v-if="!passwordVisible" />
            <preview-open theme="outline" v-else />
          </f-icon>
          <!-- showclear -->
          <f-icon
            v-if="showClear"
            :class="[bem.e('icon'), bem.e('clear')]"
            @click="handleClear"
          >
            <close-one theme="outline" />
          </f-icon>
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
  nextTick,
  ref,
  StyleValue,
  useAttrs,
  useSlots,
  watch
} from 'vue'
import { CloseOne, PreviewOpen, PreviewClose } from '@icon-park/vue-next'
import { createNamespace } from '@Fan-ui/utils/create'
import { inputProps, inputEmits } from './input'
import { FIcon } from '@Fan-ui/components/icon'
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
  return [
    bem.b(),
    bem.is('disabled', props.disabled),
    bem.m(props.size),
    {
      [bem.b('group')]: slots.prepend || slots.append,
      [bem.m('prefix')]: slots.prefix,
      [bem.m('suffix')]: slots.suffix || props.clearable || props.showPassword,
      [bem.bm('suffix', 'password-clear')]:
        showClear.value && showPwdVisible.value
    }
  ]
})

const wrapperKls = computed(() => {
  return [bem.e('wrapper'), bem.is('focus', props.autofocus)]
})

const suffixVisible = computed(() => {
  return (
    slots.suffix ||
    (props.showPassword && !props.disabled && !props.readonly) ||
    props.clearable
  )
})

const showPwdVisible = computed(() => {
  return (
    props.modelValue && props.showPassword && !props.disabled && !props.readonly
  )
})

const showClear = computed(() => {
  return (
    props.clearable && props.modelValue && !props.disabled && !props.readonly
  )
})

const attrs = useAttrs()

const containerStyle = computed<StyleValue>(() => [attrs.style as StyleValue])

const focus = async () => {
  await nextTick(() => {
    inputRef.value?.focus()
  })
}

const passwordVisible = ref(false)
const hendlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
  focus()
}

const handleClear = () => {
  emit('update:modelValue', '')
  focus()
}

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
