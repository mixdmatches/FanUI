<template>
  <div class="demo-progress">
    <f-progress :percentage="50" />
    <f-progress :percentage="100" :format="format" />
    <f-progress :percentage="100" status="success" />
    <f-progress :percentage="100" status="warning" />
    <f-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage: number) =>
  percentage === 100 ? 'Full' : `${percentage}%`
</script>

<style scoped>
.demo-progress .f-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
