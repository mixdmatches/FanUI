<template>
  <div class="demo-container">
    <f-bubble
      content="hello,FanUI"
      align="right"
      :avatarConfig="userConfig"
    ></f-bubble>
    <f-bubble content="hello" :avatarConfig="{}" align="right"></f-bubble>
    <f-bubble
      content="Hello, what can I do for you?"
      :avatarConfig="modelConfig"
    ></f-bubble>
    <f-bubble
      content="You can ask me everything~"
      :avatarConfig="{}"
    ></f-bubble>
    <f-bubble
      content="hello,FanUI"
      align="right"
      :avatarConfig="userTopConfig"
      avatarPosition="top"
    ></f-bubble>
    <f-bubble
      content="Hello, what can I do for you?"
      :avatarConfig="modelTopConfig"
      avatarPosition="top"
    ></f-bubble>
  </div>
</template>

<script setup lang="ts">
const userConfig = {
  imgSrc: '/FanUI/logo.png',
  displayName: 'User',
  isRound: true
}
const modelConfig = {
  imgSrc: '/FanUI/logo.png',
  displayName: 'Model',
  isRound: true
}
const userTopConfig = {
  ...userConfig,
  displayName: 'User'
}
const modelTopConfig = {
  ...modelConfig,
  displayName: 'Model'
}
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
