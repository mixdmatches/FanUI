<template>
  <f-collapse v-model="activeNames">
    <f-collapse-item title="标题1" name="1">
      <div>哈哈哈哈哈哈哈哈哈哈这是标题1de内容捏</div>
    </f-collapse-item>
    <f-collapse-item name="2">
      <template #title> 标题2 </template>
      <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </f-collapse-item>
    <f-collapse-item name="3">
      <template #title> 标题3 </template>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈这是标题3的内容捏
      </div>
    </f-collapse-item>
  </f-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1'])
</script>
