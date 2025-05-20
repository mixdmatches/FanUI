<template>
  <f-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </f-checkbox>
  <f-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <f-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </f-checkbox>
  </f-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CheckboxValueType } from '@fan-ui/components/checkbox'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: CheckboxValueType) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: CheckboxValueType[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>
