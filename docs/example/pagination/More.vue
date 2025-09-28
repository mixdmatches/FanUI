<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(2)
const handleChange = (current: number, pageSize: number) => {
  console.log(current, pageSize)
}
</script>

<template>
  <f-pagination
    v-model:current="currentPage"
    show-total
    :total="500"
    @change="handleChange"
  ></f-pagination>
</template>
