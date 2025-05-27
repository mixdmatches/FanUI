<template>
  <f-button @click="handleMessage">show message</f-button>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'

const handleMessage = () => {
  FMessage('消息')
}
</script>
