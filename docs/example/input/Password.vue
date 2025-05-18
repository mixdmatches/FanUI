<template>
  <f-input
    v-model="password"
    style="width: 240px"
    placeholder="Please input"
    show-password
  ></f-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
</script>
