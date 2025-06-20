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
</template>

<script setup lang="ts"></script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
