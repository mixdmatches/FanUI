<script setup lang="ts">
import { ref } from 'vue'
const tooltipRef = ref()
</script>

<template>
  <f-tooltip manual content="hover me" ref="tooltipRef">
    <f-button>手动触发</f-button>
  </f-tooltip>
  <span class="work">
    <f-button @click="tooltipRef.open()">open</f-button>
    <f-button @click="tooltipRef.close()">close</f-button>
  </span>
</template>

<style scoped>
.work {
  margin-left: 10px;
}
</style>
