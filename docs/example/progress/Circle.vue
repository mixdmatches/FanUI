<template>
  <div class="demo-progress">
    <f-progress type="circle" :percentage="0" />
    <f-progress type="circle" :percentage="25" />
    <f-progress type="circle" :percentage="100" status="success" />
    <f-progress type="circle" :percentage="70" status="warning" />
    <f-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .f-progress--circle {
  margin-right: 15px;
}
</style>
