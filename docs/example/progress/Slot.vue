<template>
  <div class="demo-progress">
    <f-progress :percentage="50">
      <f-button text>Content</f-button>
    </f-progress>
    <f-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </f-progress>
    <f-progress type="circle" :percentage="100" status="success">
      <f-button type="success" :icon="CheckOne" circle />
    </f-progress>
    <f-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </f-progress>
  </div>
</template>

<script lang="ts" setup>
import { CheckOne } from '@icon-park/vue-next'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .f-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .f-progress--circle {
  margin-right: 15px;
}
</style>
