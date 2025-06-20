<template>
  <span :class="[bem.b(), { [bem.m(variant)]: variant }, bem.m(align)]">
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <f-icon v-else :class="bem.is('loading', loading)">
        <component :is="Loading"></component>
      </f-icon>
    </template>
    <template v-else>
      {{ content }}
    </template>
  </span>
</template>

<script setup lang="ts">
import { bubbleProps } from './bubble'
import { createNamespace } from '@fan-ui/utils'
import Loading from './icon/loading.vue'
import FIcon from '@fan-ui/components/icon'
defineOptions({
  name: 'f-bubble'
})

defineProps(bubbleProps)

const bem = createNamespace('bubble')
</script>

<style scoped></style>
