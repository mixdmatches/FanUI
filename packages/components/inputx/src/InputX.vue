<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { Send, LoadingFour } from '@icon-park/vue-next'
import { inputXEmits, inputXProps } from './input-x'
import { ref, watch } from 'vue'
const bem = createNamespace('input-x')
defineOptions({ name: 'f-input-x' })
const props = defineProps(inputXProps)
const emit = defineEmits(inputXEmits)

const textarea$ = ref<HTMLTextAreaElement>()
const textValue = ref('')

const MIN_HEIGHT = 70
const MAX_HEIGHT = 150

const textHeight = ref(MIN_HEIGHT)

// 自动调整textarea高度的方法
const adjustTextareaHeight = () => {
  if (!textarea$.value) return

  textarea$.value.style.height = `${MIN_HEIGHT}px`
  const scrollHeight = textarea$.value.scrollHeight

  if (scrollHeight < MIN_HEIGHT) {
    textHeight.value = MIN_HEIGHT
  } else if (scrollHeight > MAX_HEIGHT) {
    textHeight.value = MAX_HEIGHT
  } else {
    textHeight.value = scrollHeight
  }
}

watch(
  () => props.modelValue,
  newVal => {
    textValue.value = String(newVal) || ''
    if (!props.simple) {
      adjustTextareaHeight()
    }
  }
)

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const handleClickButton = (event: Event) => {
  if (event) {
    event.preventDefault()
  }
  if (props.loading) {
    emit('onCancel')
  } else {
    emit('onSubmit', textValue.value)
  }
  textValue.value = ''
  if (!props.simple) {
    textHeight.value = MIN_HEIGHT
  }
}
</script>

<template>
  <div :class="[bem.b(), { [bem.m('simple')]: simple }]">
    <!-- 这个是用于输入框顶部的部分，如提交的文件展示等 -->
    <div :class="bem.e('top')" v-if="$slots.top">
      <slot name="top"></slot>
    </div>
    <div :class="bem.e('suffix-extra')" v-if="simple">
      <slot name="extra"></slot>
    </div>
    <div :class="bem.e('content')">
      <textarea
        ref="textarea$"
        :style="{ height: `${simple ? 'auto' : textHeight}px` }"
        :placeholder="placeholder"
        :value="textValue"
        :maxlength="maxLength === 0 ? Infinity : maxLength"
        @input="handleInput"
        @keydown.enter.exact="handleClickButton($event)"
        @keydown.shift.enter="handleClickButton"
      ></textarea>
    </div>
    <div :class="bem.e('suffix')">
      <div :class="bem.e('suffix-extra')" v-if="!simple">
        <slot name="extra"></slot>
      </div>
      <div :class="bem.e('max-length')" v-if="maxLength > 0">
        {{ textValue.length }}/{{ maxLength }}
      </div>
      <div :class="bem.em('suffix-btn')">
        <slot name="send-btn">
          <f-button
            type="primary"
            circle
            allow-disabled-click
            :icon="loading ? LoadingFour : Send"
            :loading="loading"
            :disabled="textValue === '' && !loading"
            @click="handleClickButton($event)"
          ></f-button>
        </slot>
      </div>
    </div>
  </div>
</template>
