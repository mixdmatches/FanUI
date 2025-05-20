<template>
  <div class="mb-10">
    <f-checkbox v-model="checked1" label="Option1" size="large" border />
    <f-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mb-10">
    <f-checkbox v-model="checked3" label="Option1" border />
    <f-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mb-10">
    <f-checkbox-group v-model="checkboxGroup1" size="small">
      <f-checkbox label="Option1" value="Value1" border />
      <f-checkbox label="Option2" value="Value2" border />
    </f-checkbox-group>
  </div>
  <div class="mb-10">
    <f-checkbox-group v-model="checkboxGroup1" size="small">
      <f-checkbox label="Option1" value="Value1" border disabled />
      <f-checkbox label="Option2" value="Value2" border disabled />
    </f-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Value1'])
</script>
