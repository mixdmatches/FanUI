<template>
  <div class="mb-2 ml-4">
    <f-radio-group v-model="radio1">
      <f-radio value="1" size="large">Option 1</f-radio>
      <f-radio value="2" size="large">Option 2</f-radio>
    </f-radio-group>
  </div>
  <div class="my-2 ml-4">
    <f-radio-group v-model="radio2">
      <f-radio value="1">Option 1</f-radio>
      <f-radio value="2">Option 2</f-radio>
    </f-radio-group>
  </div>
  <div class="my-4 ml-4">
    <f-radio-group v-model="radio3">
      <f-radio value="1" size="small">Option 1</f-radio>
      <f-radio value="2" size="small">Option 2</f-radio>
    </f-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
</script>
