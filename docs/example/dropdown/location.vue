<template>
  <div class="box">
    <f-dropdown placement="top-start">
      <f-button>topStart</f-button>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item> 这是第一项 </f-dropdown-item>
          <f-dropdown-item> 这是第二项 </f-dropdown-item>
          <f-dropdown-item> 这是第三项 </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
    <f-dropdown placement="top">
      <f-button>top</f-button>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item> 这是第一项 </f-dropdown-item>
          <f-dropdown-item> 这是第二项 </f-dropdown-item>
          <f-dropdown-item> 这是第三项 </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
    <f-dropdown placement="top-end">
      <f-button>topEnd</f-button>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item> 这是第一项 </f-dropdown-item>
          <f-dropdown-item> 这是第二项 </f-dropdown-item>
          <f-dropdown-item> 这是第三项 </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  gap: 10px;
}
</style>
