<template>
  <div class="demo-progress">
    <f-progress :percentage="50" :indeterminate="true" />
    <f-progress :percentage="100" :format="format" :indeterminate="true" />
    <f-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <f-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <f-progress :percentage="50" status="exception" :indeterminate="true" />
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
