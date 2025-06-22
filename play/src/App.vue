<template>
  <f-virtual-scroll-list
    :data-sources="item"
    data-key="id"
    :keeps="30"
    :estimateSize="80"
    class="virtual-list"
    :dataComponent="Item"
  ></f-virtual-scroll-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Random } from 'mockjs'
import Item from './item.vue'
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
const item = ref(data)
</script>

<style lang="scss" scoped>
.virtual-list {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  border: 3px solid red;
}
</style>
