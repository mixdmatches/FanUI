<template>
  <f-button text>default</f-button>
  <f-button text type="primary" plain>primary</f-button>
  <f-button text type="success" round>success</f-button>
  <f-button text type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
</script>
