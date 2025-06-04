<template>
  <div :class="bem.b()"></div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { tableColumnProps } from './table-column'

defineOptions({
  name: 'f-table-column'
})

const bem = createNamespace('table-column')

defineProps(tableColumnProps)
</script>
