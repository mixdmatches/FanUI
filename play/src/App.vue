<template>
  <div class="demo-container">
    <f-bubble
      :avatarConfig="userAvatar"
      :avatarPosition="'top'"
      content="Hello fanUIHello fanUIHello fanUI"
    ></f-bubble>
    <f-bubble
      content="Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?"
      :avatarConfig="modelAvatar"
      :align="'right'"
      :avatarPosition="'top'"
    ></f-bubble>
  </div>
</template>

<script setup lang="ts">
const userAvatar = {
  imgSrc: '../public/avatar.jpg',
  isRound: true,
  displayName: 'chat bot'
}
const modelAvatar = {
  imgSrc: '../public/avatar.jpg',
  isRound: true,
  displayName: 'user'
}
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
