<template>
  <f-radio-group v-model="radio">
    <f-radio :value="3">Option A</f-radio>
    <f-radio :value="6">Option B</f-radio>
    <f-radio :value="9">Option C</f-radio>
  </f-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
