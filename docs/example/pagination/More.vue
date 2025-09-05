<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(2)
</script>

<template>
  <f-pagination v-model:current="currentPage" :total="500"></f-pagination>
</template>

<style scoped></style>
