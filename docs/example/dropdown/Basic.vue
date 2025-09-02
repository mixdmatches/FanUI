<script setup lang="ts">
import { ref } from 'vue'

const menus = ref([
  { label: 'option1', key: '1' },
  { label: 'option2', key: '2', disabled: true },
  { label: 'option3', key: '3', divider: true }
])
</script>

<template>
  <f-dropdown :menuOptions="menus" trigger="click">
    <f-button>下拉</f-button>
  </f-dropdown>
</template>

<style scoped lang="scss"></style>
