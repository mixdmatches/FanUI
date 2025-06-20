<template>
  <f-bubble content="气泡框"></f-bubble>
  <f-bubble content="气泡框" variant="border"></f-bubble>
  <f-bubble content="气泡框" variant="none"></f-bubble>
  <div class="demo-container">
    <f-bubble content="Hello fanUI"></f-bubble>
    <f-bubble
      content="Hello, what can I do for you?"
      :align="'right'"
    ></f-bubble>
  </div>
  <f-avatar src="../public/avatar.jpg"></f-avatar>
  <f-avatar src="../public/avatar.jpg" size="large"></f-avatar>
  <f-avatar src="../public/avatar.jpg" size="small"></f-avatar>
  <f-avatar src="../public/avatar.jpg" shape="circle"></f-avatar>
  <f-avatar src="../public/avatar.jpg" shape="circle" size="large"></f-avatar>
  <f-avatar src="../public/avatar.jpg" shape="circle" size="small"></f-avatar>
  <f-avatar :icon="People" />
  <f-avatar> user </f-avatar>
  <f-avatar shape="circle" :icon="People" />
  <f-avatar shape="circle"> user </f-avatar>
</template>

<script setup lang="ts">
import { People } from '@icon-park/vue-next'
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
