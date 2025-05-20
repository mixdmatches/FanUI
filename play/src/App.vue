<template>
  <div>
    <f-checkbox-group v-model="checkboxGroup1" size="large">
      <f-checkbox v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </f-checkbox>
    </f-checkbox-group>
  </div>
  <div class="demo-button-style">
    <f-checkbox-group v-model="checkboxGroup2">
      <f-checkbox v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </f-checkbox>
    </f-checkbox-group>
  </div>
  <div class="demo-button-style">
    <f-checkbox-group v-model="checkboxGroup3" size="small">
      <f-checkbox
        v-for="city in cities"
        :key="city"
        :value="city"
        :disabled="city === 'Beijing'"
      >
        {{ city }}
      </f-checkbox>
    </f-checkbox-group>
  </div>
  <div class="demo-button-style">
    <f-checkbox-group v-model="checkboxGroup4" size="small" disabled>
      <f-checkbox v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </f-checkbox>
    </f-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
