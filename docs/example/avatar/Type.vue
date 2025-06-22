<template>
  <div class="demo-avatar">
    <f-avatar src="/FanUI/logo.png"></f-avatar>
    <f-avatar :icon="People"></f-avatar>
    <f-avatar>User</f-avatar>
  </div>
</template>

<script setup lang="ts">
import { People } from '@icon-park/vue-next'
</script>

<style scoped>
.demo-avatar {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
