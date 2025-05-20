<script setup lang="ts">
import type { CheckboxValueType } from '@fan-ui/components/checkbox'
import type { CheckboxGroupValueType } from '@fan-ui/components/checkbox/src/checkbox-group'
import { ref } from 'vue'
const checked1 = ref(false)
const handleChange = (val: CheckboxValueType) => {
  console.log(val)
}

const groupChecked = ref(['选项一'])
const handleChangeGroup = (val: CheckboxGroupValueType) => {
  console.log(val)
}
</script>

<template>
  <f-checkbox
    size="small"
    v-model="checked1"
    label="small"
    @change="handleChange"
  ></f-checkbox>
  <f-checkbox label="default"></f-checkbox>
  <f-checkbox label="large" size="large"></f-checkbox>
  <f-checkbox-group
    size="large"
    v-model="groupChecked"
    @change="handleChangeGroup"
  >
    <f-checkbox size="small" label="选项一"></f-checkbox>
    <f-checkbox size="default" label="选项二"></f-checkbox>
    <f-checkbox label="选项三"></f-checkbox>
  </f-checkbox-group>
</template>
