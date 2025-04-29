<template>
  <ClientOnly>
    <Example :file="path" :demo="formatPathDemos[path]" />
  </ClientOnly>
</template>
<script setup lang="ts">
import { computed, getCurrentInstance, toRef } from 'vue'

import Example from './vp-example.vue'

const props = defineProps<{
  source: string
  path: string
  css?: string
  cssPreProcessor?: string
  js?: string
  html?: string
  demos: object
  rawSource: string
  description?: string
}>()

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach(key => {
    demos[key.replace('../../../example/', '').replace('.vue', '')] = props.demos[key].default
  })

  return demos
})
</script>
