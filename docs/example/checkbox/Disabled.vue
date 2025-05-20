<template>
  <div>
    <f-checkbox v-model="checked1" disabled>disabled</f-checkbox>
    <f-checkbox v-model="checked2">not disabled</f-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(false)
</script>
