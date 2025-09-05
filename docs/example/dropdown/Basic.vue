<template>
  <f-dropdown>
    hover me
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> item1 </f-dropdown-item>
        <f-dropdown-item disabled> item2 </f-dropdown-item>
        <f-dropdown-item divider> item3 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
</template>
