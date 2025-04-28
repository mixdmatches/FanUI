<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
// import { FButton,FIcon } from '../../build/index.js'
import type { FButton } from '../../build/index.d.ts'
import { ref } from 'vue'

interface TreeNode {
  label: string
  key: string
  children?: TreeNode[]
}

function createTree(level: number = 4, parentKey: string = ''): TreeNode[] {
  if (!level) return []
  return new Array(level - 1).fill(0).map((_, index) => {
    const key = parentKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createTree(level - 1, `${key}-${index}`)
    }
  })
}

function createLabel(level: number): string {
  if (level === 1) return '一级'
  if (level === 2) return '二级'
  if (level === 3) return '三级'
  if (level === 4) return '四级'
  return ''
}

const treeData = ref(createTree(4))
</script>

<template>
  <div>
    <f-icon>
      <Search></Search>
    </f-icon>
    <hr />
    <f-button>啊啊啊</f-button>
    <f-button primary>按钮</f-button>
    <f-button loading>default</f-button>
    <f-button loading type="primary">primary</f-button>
    <f-button loading type="success">success</f-button>
    <f-button loading type="info">info</f-button>
    <f-button loading type="warning">warning</f-button>
    <f-button loading type="danger">danger</f-button>
    <hr />
    <f-button plain>plain</f-button>
    <f-button type="primary" plain>primary</f-button>
    <f-button type="success" plain>success</f-button>
    <f-button type="info" plain>info</f-button>
    <f-button type="warning" plain>warning</f-button>
    <f-button type="danger" plain>danger</f-button>
    <hr />
    <f-button round>round</f-button>
    <f-button type="primary" round>primary</f-button>
    <f-button type="success" round>success</f-button>
    <f-button type="info" round>info</f-button>
    <f-button type="warning" round>warning</f-button>
    <f-button type="danger" round>danger</f-button>
    <hr />
    <f-button circle :icon="Search">circle</f-button>
    <f-button type="primary" circle>primary</f-button>
    <f-button type="success" circle>success</f-button>
    <f-button type="info" circle>info</f-button>
    <f-button type="warning" circle>warning</f-button>
    <f-button type="danger" circle>danger</f-button>
    <hr />
    <f-button disabled>default</f-button>
    <f-button disabled type="primary">primary</f-button>
    <f-button disabled type="success">success</f-button>
    <f-button disabled type="info">info</f-button>
    <f-button disabled type="warning">warning</f-button>
    <f-button disabled type="danger">danger</f-button>
    <hr />
    <f-button disabled plain>plain</f-button>
    <f-button disabled type="primary" plain>primary</f-button>
    <f-button disabled type="success" plain>success</f-button>
    <f-button disabled type="info" plain>info</f-button>
    <f-button disabled type="warning" plain>warning</f-button>
    <f-button disabled type="danger" plain>danger</f-button>
    <hr />
    <f-button link>default</f-button>
    <f-button link type="primary">primary</f-button>
    <f-button link type="success">success</f-button>
    <f-button link type="info">info</f-button>
    <f-button link type="warning">warning</f-button>
    <f-button link type="danger">danger</f-button>
    <hr />
    <f-button disabled link plain>plain</f-button>
    <f-button disabled link type="primary" plain>primary</f-button>
    <f-button disabled link type="success" plain>success</f-button>
    <f-button disabled link type="info" plain>info</f-button>
    <f-button disabled link type="warning" plain>warning</f-button>
    <f-button disabled link type="danger" plain>danger</f-button>
    <hr />
    <f-button text bg>default</f-button>
    <f-button text bg type="primary">primary</f-button>
    <f-button text bg type="success">success</f-button>
    <f-button text bg type="info">info</f-button>
    <f-button text bg type="warning">warning</f-button>
    <f-button text bg type="danger">danger</f-button>
    <hr />
    <f-button text>default</f-button>
    <f-button text type="primary">primary</f-button>
    <f-button text type="success">success</f-button>
    <f-button text type="info">info</f-button>
    <f-button text type="warning">warning</f-button>
    <f-button text type="danger">danger</f-button>
    <hr />
    <f-button disabled text plain>plain</f-button>
    <f-button disabled text type="primary" plain>primary</f-button>
    <f-button disabled text type="success" plain>success</f-button>
    <f-button disabled text type="info" plain>info</f-button>
    <f-button disabled text type="warning" plain>warning</f-button>
    <f-button disabled text type="danger" plain>danger</f-button>
    <hr />
    <f-button :icon="Search"> </f-button>
  </div>
</template>
