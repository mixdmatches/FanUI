<template>
  <f-input
    v-model="username"
    style="width: 240px"
    placeholder="Please input"
    clearable
  ></f-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')
</script>
