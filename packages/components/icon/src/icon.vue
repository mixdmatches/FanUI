<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import '../style/index'
import { createNamespace } from '@Fan-ui/utils/create'
import { computed } from 'vue'
import { iconProps } from './icon'
const bem = createNamespace('icon') // 生成icon-namespace类名，用于设置icon的样式
const props = defineProps(iconProps)
defineOptions({ name: 'f-icon' })
// defineEmits
// defineExpose
// useAttrs // 用于获取组件的属性
// useSlots // 用于获取组件的插槽

// 计算属性 计算一个样式处理
const style = computed(() => {
  // 如果没有size和color，直接返回空对象
  if (!props.size && !props.color) return {}
  return {
    fontSize: props.size ? `${props.size}px` : '',
    color: props.color ? props.color : ''
  }
})
</script>
