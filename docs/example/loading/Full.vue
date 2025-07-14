<template>
  <f-button
    v-loading.fullscreen.lock="fullscreenLoading"
    fan-loading-text="加载中"
    type="primary"
    @click="openFullScreen1"
    >指令加载全屏loading</f-button
  >
  <f-button type="primary" @click="openFullScreen2"
    >服务加载全屏loading</f-button
  >
</template>

<script setup lang="ts">
import { FLoading } from '@fan-ui/components'
import { ref } from 'vue'
const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}
const openFullScreen2 = () => {
  const loading = FLoading.service({
    text: '加载中，请稍后',
    lock: true,
    background: 'rgba(0, 0, 0, 0.5)'
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
</script>
