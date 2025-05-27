<template>
  <div>
    <f-button plain @click="open1">info</f-button>
    <f-button plain @click="open2">success</f-button>
    <f-button plain @click="open3">warning</f-button>
    <f-button plain @click="open4">error</f-button>
    <f-button plain @click="oprn5">duration = 0</f-button>
  </div>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'
const open1 = () => {
  FMessage({ type: 'info', message: 'info消息', plain: true, showClose: true })
}
const open2 = () => {
  FMessage({
    type: 'success',
    message: 'success消息',
    plain: true,
    showClose: true,
    duration: 5000
  })
}
const open3 = () => {
  FMessage({
    type: 'warning',
    message: 'warning消息',
    plain: true,
    showClose: true
  })
}
const open4 = () => {
  FMessage({
    type: 'error',
    message: 'error消息',
    plain: true,
    showClose: true
  })
}
const oprn5 = () => {
  FMessage({
    type: 'info',
    message: 'info消息',
    plain: true,
    showClose: true,
    duration: 0
  })
}
</script>
