<template>
  <f-button disabled>default</f-button>
  <f-button disabled type="primary" plain>primary</f-button>
  <f-button disabled type="success" round>success</f-button>
  <f-button disabled type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
</script>
