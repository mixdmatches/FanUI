<template>
  <div>
    <f-checkbox v-model="checked1" label="option1"></f-checkbox>
    <f-checkbox v-model="checked2" label="option2"></f-checkbox>
  </div>
  <div>
    <f-checkbox v-model="checked3" label="option3" size="large"></f-checkbox>
    <f-checkbox v-model="checked4" label="option4" size="large"></f-checkbox>
  </div>
  <div>
    <f-checkbox v-model="checked5" label="option5" size="small"></f-checkbox>
    <f-checkbox v-model="checked6" label="option6" size="small"></f-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
</script>
