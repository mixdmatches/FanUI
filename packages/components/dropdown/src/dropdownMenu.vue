<template>
  <ul :class="bem.e('menu')">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'

const bem = createNamespace('dropdown')
defineOptions({
  name: 'f-dropdown-menu'
})
</script>
