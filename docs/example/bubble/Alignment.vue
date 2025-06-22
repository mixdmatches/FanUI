<template>
  <div class="demo-container">
    <f-bubble content="这是一个左对齐的气泡" align="left" />
    <f-bubble content="这是一个右对齐的气泡" align="right" />
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
