<script setup lang="ts"></script>

<template>
  <f-dropdown no-arrow>
    <f-button>无箭头下拉菜单</f-button>
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> 这是第一项 </f-dropdown-item>
        <f-dropdown-item> 这是第二项 </f-dropdown-item>
        <f-dropdown-item> 这是第三项 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
  <f-dropdown style="margin-left: 10px" no-arrow show-shadow>
    <f-button>有阴影下拉菜单</f-button>
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> 这是第一项 </f-dropdown-item>
        <f-dropdown-item> 这是第二项 </f-dropdown-item>
        <f-dropdown-item> 这是第三项 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
</template>

<style scoped></style>
