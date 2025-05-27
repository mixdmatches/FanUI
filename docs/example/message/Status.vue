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
  FMessage('info消息')
}
const open2 = () => {
  FMessage({ type: 'success', message: 'success消息' })
}
const open3 = () => {
  FMessage({ type: 'warning', message: 'warning消息' })
}
const open4 = () => {
  FMessage.error('error消息')
}
</script>
