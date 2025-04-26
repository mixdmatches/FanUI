<template>
  <component :is="tag" :class="classCustom" @click="handleClick">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import '../style/index'
import { createNamespace } from '@Fan-ui/utils/create'
import { buttonProps, buttonEmits } from './button'
defineOptions({ name: 'f-button' })

const bem = createNamespace('button')

const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)

const handleClick = (evt: MouseEvent) => {
  emits('click', evt)
}

const classCustom = computed(() => {
  const { type, size, plain, round, circle, disabled, link, text, bg } = props
  return [
    bem.b(),
    bem.m(type),
    bem.m(size),
    bem.is('plain', plain),
    bem.is('round', round),
    bem.is('circle', circle),
    bem.is('disabled', disabled),
    bem.is('link', link),
    bem.is('text', text),
    bem.is('has-bg', bg)
  ]
})
</script>
