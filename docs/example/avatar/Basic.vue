<template>
  <div class="demo-avatar">
    <div class="demo-avatar__group">
      <f-avatar src="/FanUI/logo.png" size="large"></f-avatar>
      <f-avatar src="/FanUI/logo.png" size="medium"></f-avatar>
      <f-avatar src="/FanUI/logo.png" size="small"></f-avatar>
    </div>
    <div class="demo-avatar__group">
      <f-avatar src="/FanUI/logo.png" size="large" shape="circle"></f-avatar>
      <f-avatar src="/FanUI/logo.png" size="medium" shape="circle"></f-avatar>
      <f-avatar src="/FanUI/logo.png" size="small" shape="circle"></f-avatar>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.demo-avatar {
  display: flex;
  gap: 10px;
  flex-direction: column;
  .demo-avatar__group {
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>
