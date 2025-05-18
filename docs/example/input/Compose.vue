<template>
  <div class="mb-10">
    <f-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Pleace input"
    >
      <template #prepend>Http://</template>
    </f-input>
  </div>
  <div class="mb-10">
    <f-input
      v-model="input2"
      style="max-width: 600px"
      placeholder="Pleace input"
    >
      <template #append>.com</template>
    </f-input>
  </div>
  <div class="mb-10">
    <f-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Pleace input"
    >
      <template #prepend>
        <f-button :icon="Search"></f-button>
      </template>
    </f-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
