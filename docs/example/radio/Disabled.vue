<template>
  <f-radio v-model="radio" disabled value="Option A">Option A</f-radio>
  <f-radio v-model="radio" disabled value="Option B"> Option B </f-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('Option B')
</script>
