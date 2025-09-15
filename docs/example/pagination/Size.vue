<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(4)
const pageSizeCurrent = ref(10)
</script>

<template>
  <f-pagination
    v-model:current="currentPage"
    v-model:page-size="pageSizeCurrent"
    :total="500"
    show-total
    :page-size-options="[5, 10, 15, 20]"
  ></f-pagination>
</template>
