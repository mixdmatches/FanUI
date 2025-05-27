<template>
  <div>
    <f-button plain @click="open1">info</f-button>
    <f-button plain @click="open2">success</f-button>
    <f-button plain @click="open3">warning</f-button>
    <f-button plain @click="open4">error</f-button>
  </div>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'
const open1 = () => {
  FMessage({ type: 'info', message: 'info消息', plain: true })
}
const open2 = () => {
  FMessage({ type: 'success', message: 'success消息', plain: true })
}
const open3 = () => {
  FMessage({ type: 'warning', message: 'warning消息', plain: true })
}
const open4 = () => {
  FMessage({ type: 'error', message: 'error消息', plain: true })
}
</script>
