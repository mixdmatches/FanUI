<template>
  <f-button link>default</f-button>
  <f-button link type="primary" plain>primary</f-button>
  <f-button link type="success" round>success</f-button>
  <f-button link type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
</script>
