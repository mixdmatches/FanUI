<template>
  <f-button type="primary" loading>Loading</f-button>
  <f-button type="primary" loading>
    <template #loading>
      <LoadingOne class="custom-loading" />
    </template>
    Loading
  </f-button>
</template>

<script lang="ts" setup>
import { LoadingOne } from '@icon-park/vue-next'
</script>

<style scoped>
.f-button .custom-loading {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 125.66;
  stroke-dashoffset: 0;
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
