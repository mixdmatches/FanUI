<template>
  <f-virtual-scroll-list
    :data-sources="item"
    data-key="id"
    :keeps="30"
    :estimateSize="80"
    class="virtual-list"
    :dataComponent="Item"
  ></f-virtual-scroll-list>

  <!-- 折叠面板 -->
  <div class="box" style="width: 800px">
    <f-collapse :accordion="true" v-model="activeNames" @chang="handleChange">
      <f-collapse-item title="标题1" name="1">
        <div>是解放军第四飞机</div>
        <div>
          是解放军第四飞机
          是解放军第四飞机是解放军第四飞机是解放军第四飞机是解放军第四飞机是解放军第四飞机
          interface: all elements should be 是解放军第四飞机, such as: design
          style, icons and texts, position of elements, etc.
        </div>
      </f-collapse-item>
      <f-collapse-item name="2">
        <template #title> 标题2 </template>
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </f-collapse-item>
      <f-collapse-item name="3">
        <template #title> 标题3 </template>
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </f-collapse-item>
    </f-collapse>
  </div>
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

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log('change', val)
}
</script>

<style lang="scss" scoped>
.virtual-list {
  width: 700px;
  height: 500px;
  overflow-y: scroll;
  border: 3px solid red;
}
</style>
