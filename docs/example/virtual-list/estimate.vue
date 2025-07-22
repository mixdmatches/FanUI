<template>
  <f-virtual-scroll-list
    class="virtual-list"
    :data-sources="sources"
    data-key="id"
    :keeps="10"
    :estimateSize="80"
    :dataComponent="Item"
    @handleScroll="handleScroll"
  >
  </f-virtual-scroll-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Item from './item.vue'
import pkg from 'mockjs';
const { Random } = pkg;

const totalCount = 10000

interface Datatype {
  id: number
  name: string
  desc: string
  index: number
}

const data: Array<Datatype> = []

let index = 0
while (index++ !== totalCount) {
  data.push({
    id: index,
    name: Random.name(),
    desc: Random.csentence(20, 120),
    index
  })
}
const sources = ref(data)

const handleScroll = range => {
  console.log('滚动:', range)
}
</script>

<style lang="scss" scoped>
.virtual-list {
  height: 500px;
  overflow: auto;
}
</style>
