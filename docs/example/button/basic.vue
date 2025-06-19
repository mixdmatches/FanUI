<template>
  <f-button>default</f-button>
  <f-button type="primary" plain>primary</f-button>
  <f-button type="success" round>success</f-button>
  <f-button type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
</script>
