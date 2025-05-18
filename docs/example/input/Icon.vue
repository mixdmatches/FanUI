<template>
  <div class="flex gap-4 mb-10 align-center">
    <span>使用属性</span>
    <f-input
      v-model="input1"
      style="width: 240px"
      placeholder="选择日期"
      :suffix-icon="Calendar"
    ></f-input>
    <f-input
      v-model="input2"
      style="width: 240px"
      placeholder="选择日期"
      :prefix-icon="Calendar"
    ></f-input>
  </div>
  <div class="flex gap-4 mb-10">
    <span>使用插槽</span>
    <f-input v-model="input3" style="width: 240px" placeholder="搜索">
      <template #suffix>
        <Search></Search>
      </template>
    </f-input>
    <f-input v-model="input4" style="width: 240px" placeholder="搜索">
      <template #prefix>
        <Search></Search>
      </template>
    </f-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@icon-park/vue-next'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
