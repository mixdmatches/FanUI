<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path
      d="M50 10A40 40 0 0 1 90 50A40 40 0 0 1 50 90A40 40 0 0 1 10 50A40 40 0 0 1 50 10Z"
      fill="none"
      stroke="currentColor"
      stroke-width="10"
      stroke-linecap="round"
      stroke-dasharray="125.66"
      stroke-dashoffset="0"
      style="animation: rotate 1.5s linear infinite;"
    />
  </svg>
</template>

<script setup lang="ts">
// 设置组件名称
defineOptions({
  name: 'Loading'
})
</script>

<style scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>