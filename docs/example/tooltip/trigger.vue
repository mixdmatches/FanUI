<template>
  <div class="box">
    <f-tooltip trigger="click" content="click me">
      <f-button>click me</f-button>
    </f-tooltip>
    <f-tooltip trigger="hover" content="hover me">
      <f-button>hover me</f-button>
    </f-tooltip>
  </div>
</template>

<style lang="scss">
.box {
  display: flex;
  gap: 10px;
}
</style>
