<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(2)
</script>

<template>
  <f-pagination v-model:current="currentPage" show-total :total="500">
    <template #prev> prev </template>
    <template #next> next </template>
  </f-pagination>
</template>
