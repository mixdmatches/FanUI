<template>
  <div :class="[bem.b()]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { collapseEmits, collapseProps } from './collapse'
import { useCollapse } from './use-collapse'

const bem = createNamespace('collapse')

defineOptions({
  name: 'f-collapse'
})
const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const { activeNames, setActiveNames } = useCollapse(props, emit)

defineExpose({
  activeNames,
  setActiveNames
})
</script>
