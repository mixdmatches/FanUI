<template>
  <div :class="[bem.b(), bem.is(`${shadow}-shadow`, shadow)]">
    <div :class="bem.e('head')">
      <template v-if="slots.title">
        <slot name="title"></slot>
      </template>
      <template v-else>
        <div :class="bem.e('head-title')">{{ title }}</div>
      </template>
    </div>
    <div :class="bem.e('body')">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { cardProps } from './card'
import { useSlots } from 'vue'

defineOptions({
  name: 'f-card'
})

const bem = createNamespace('card')
const slots = useSlots()
defineProps(cardProps)
</script>
