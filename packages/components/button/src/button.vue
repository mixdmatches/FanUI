<template>
  <div :class="bem.b()">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import '../style/index'
import { createNamespace } from '@Fan-ui/utils/create'
defineOptions({ name: 'f-button' })

const bem = createNamespace('button')
</script>
