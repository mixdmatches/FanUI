<template>
  <div
    :class="[bem.b('dragger'), bem.is('dragover', isOver)]"
    @drop.prevent="onDrop"
    @dragover.prevent="onDraggerOver"
    @dragleave.prevent="isOver = false"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createNamespace } from '@fan-ui/utils/create'
import { uploadDraggerEmits, uploadDraggerProps } from './upload-dragger'

const bem = createNamespace('upload')

defineProps(uploadDraggerProps)
const emit = defineEmits(uploadDraggerEmits)

const isOver = ref(false)

const onDraggerOver = () => {
  isOver.value = true
}

const onDrop = (e: DragEvent) => {
  isOver.value = false
  e.stopPropagation()
  emit('file', Array.from(e.dataTransfer!.files))
}
</script>
