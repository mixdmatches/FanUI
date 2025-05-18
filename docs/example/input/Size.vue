<template>
  <div class="flex gap-4 align-center">
    <f-input v-model="input1" size="large" placeholder="请输入"></f-input>
    <f-input
      v-model="input1"
      placeholder="请输入"
      :prefix-icon="Search"
    ></f-input>
    <f-input v-model="input1" size="small" placeholder="请输入"></f-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@icon-park/vue-next'
const input1 = ref('')
</script>
