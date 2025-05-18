<template>
  <div
    @dragover.prevent="onDraggerOver"
    @dragleave.prevent="isOver = false"
    @drap.prevent="onDrop"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOver = ref(false)
const emit = defineEmits(['file'])
const onDraggerOver = () => {
  isOver.value = true
}

const onDrop = (e: DragEvent) => {
  e.stopPropagation()
  emit('file', Array.from(e.dataTransfer!.files)) // 调用父组件的onChange方法
}
</script>
