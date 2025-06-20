<template>
  <f-card title="card title">
    <!-- <template #title> 卡片title </template> -->
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </f-card>
  <f-virtual-scroll-list
    class="virtual-scroll"
    :data-sources="items"
    data-key="id"
    :keeps="30"
    :estimate-size="80"
    :data-component="Item"
  ></f-virtual-scroll-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Item from './item.vue'
import { Random } from 'mockjs'
const totalCount = 10000

interface DataType {
  id: number
  name: string
  desc: string
  index: number
}

const data: Array<DataType> = []

let index = 0
while (index++ !== totalCount) {
  data.push({
    id: index,
    name: Random.name(),
    desc: Random.csentence(20, 120),
    index
  })
}
const items = ref<DataType[]>(data)
console.log(items.value)
</script>

<style lang="scss" scoped>
.virtual-scroll {
  width: 100%;
  height: 500px;
  overflow: auto;
  border: 1px solid red;
}
</style>
