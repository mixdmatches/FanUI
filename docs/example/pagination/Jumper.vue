<script lang="ts" setup>
import { ref } from 'vue'
const currentPage = ref(2)
</script>

<template>
  <f-pagination
    v-model:current="currentPage"
    :total="50"
    show-jumper
  ></f-pagination>
</template>
