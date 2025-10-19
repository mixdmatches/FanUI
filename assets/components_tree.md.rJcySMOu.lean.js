import{g as h,r as p,c as f,o as m,a as t,p as s,b as n,al as b,e as l,S as i,u as a,w as d}from"./chunks/framework.Br5qlODI.js";import{am as y,an as k,ao as v,ap as T}from"./chunks/theme.COWshNnW.js";import{O as u,E as c}from"./chunks/index.CdocGXei.js";const g=`<script setup lang="ts">
import { TreeProps } from '@fan-ui/components/tree/src/tree'
import type { TreeOption } from '@fan-ui/components/tree/src/types'
import { ref } from 'vue'

const expandedKeys = ref(['0-1', '0-2', '0-15', '0-19'])
function dig(path = '0', level = 3) {
  const list: TreeProps['data'] = []
  for (let i = 0; i < 20; i += 1) {
    const key = \`\${path}-\${i}\`
    const treeNode: TreeOption = {
      label: key,
      key
    }

    if (level > 0) {
      treeNode.children = dig(key, level - 1)
    }

    list.push(treeNode)
  }
  return list
}
<\/script>

<template>
  <f-tree
    v-model:expanded-keys="expandedKeys"
    checkable
    :data="dig()"
    :height="300"
  ></f-tree>
</template>
`,D=`<script setup lang="ts">
import { TreeOption } from '@fan-ui/components/tree/src/types'
import { ref } from 'vue'

const data = ref([
  {
    label: 'Out of Tao, One is born',
    key: '0-1',
    isLeaf: false
  },
  {
    label: 'Out of Tao, One is born',
    key: '0-2',
    isLeaf: false
  }
])

function nextLabel(currentLabel?: string | number): string {
  if (!currentLabel) return 'Out of Tao, One is born'
  if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two'
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three'
  if (currentLabel === 'Out of Two, Three')
    return 'Out of Three, the created universe'
  if (currentLabel === 'Out of Three, the created universe')
    return 'Out of Tao, One is born'
  return ''
}

function handleLoadData(node: TreeOption) {
  return new Promise<TreeOption[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ])
    }, 1000)
  })
}
<\/script>

<template>
  <f-tree :data="data" :on-load="handleLoadData"></f-tree>
</template>
`,O=`<script setup lang="ts">
import { ref } from 'vue'
import { RightOne, NotebookOne } from '@icon-park/vue-next'

const expandedKeys = ref<string[]>(['0-1', '0-2', '1-1'])
const data = ref([
  {
    label: '一级',
    key: '0-1',
    children: [
      {
        label: '二级',
        key: '1-1'
      },
      {
        label: '二级',
        key: '1-2',
        children: [
          {
            label: '三级',
            key: '1-2-1'
          }
        ]
      }
    ]
  }
])
<\/script>

<template>
  <f-tree v-model:expandedKeys="expandedKeys" :data="data">
    <template #switch-icon="{ node }">
      <right-one theme="outline" size="24" fill="#abb2bd" :strokeWidth="3" />
    </template>
    <template #icon="{ node }">
      <notebook-one
        theme="outline"
        size="24"
        :fill="node.isLeaf ? '#abb2bd' : '#61afef'"
        :strokeWidth="3"
      />
    </template>
  </f-tree>
</template>
`,x=`<script setup lang="ts">
import { ref, watch } from 'vue'

const expandedKeys = ref<string[]>(['0-1', '0-2', '1-1'])
const checkedKeys = ref<string[]>(['1-2-1'])
const data = ref([
  {
    title: '一级',
    key: '0-1',
    children: [
      {
        title: '二级',
        key: '1-1',
        disabled: true,
        children: [
          {
            title: '三级',
            key: '1-1-1',
            children: [
              {
                title: '四级',
                key: '1-1-1-1'
              }
            ]
          },
          {
            title: '三级',
            key: '1-1-2'
          }
        ]
      },
      {
        disabled: true,
        title: '二级',
        key: '1-2',
        children: [
          {
            title: '三级',
            key: '1-2-1'
          }
        ]
      }
    ]
  },
  {
    title: '一级',
    key: '0-2',
    children: []
  }
])

watch(
  () => checkedKeys.value,
  () => {
    console.log('checkedKeys', checkedKeys.value)
  }
)
<\/script>

<template>
  <f-tree
    v-model:expandedKeys="expandedKeys"
    v-model:checked-keys="checkedKeys"
    :data="data"
    label-field="title"
    checkable
  ></f-tree>
</template>
`,V=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/tree.md","filePath":"components/tree.md","lastUpdated":1760875895000}'),w={name:"components/tree.md"},L=Object.assign(w,{setup(B){const o=h(!0);return(S,e)=>{const r=p("ClientOnly");return m(),f("div",null,[e[4]||(e[4]=t("h1",{id:"tree-树形控件",tabindex:"-1"},[l("Tree 树形控件 "),t("a",{class:"header-anchor",href:"#tree-树形控件","aria-label":'Permalink to "Tree 树形控件"'},"​")],-1)),e[5]||(e[5]=t("p",null,"多层次的结构列表。",-1)),e[6]||(e[6]=t("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[7]||(e[7]=t("p",null,"展示可勾选，可选中，默认展开等功能。",-1)),s(n(a(u),null,null,512),[[i,o.value]]),n(r,null,{default:d(()=>[n(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(x)},{vue:d(()=>[n(y)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=t("h2",{id:"自定义图标",tabindex:"-1"},[l("自定义图标 "),t("a",{class:"header-anchor",href:"#自定义图标","aria-label":'Permalink to "自定义图标"'},"​")],-1)),e[9]||(e[9]=t("p",null,[l("提供 "),t("code",null,"icon"),l(" 插槽来自定义图标和 "),t("code",null,"switch-icon"),l(" 插槽来自定义切换图标。")],-1)),s(n(a(u),null,null,512),[[i,o.value]]),n(r,null,{default:d(()=>[n(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(O)},{vue:d(()=>[n(k)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=t("h2",{id:"异步加载数据",tabindex:"-1"},[l("异步加载数据 "),t("a",{class:"header-anchor",href:"#异步加载数据","aria-label":'Permalink to "异步加载数据"'},"​")],-1)),e[11]||(e[11]=t("p",null,"异步加载数据",-1)),s(n(a(u),null,null,512),[[i,o.value]]),n(r,null,{default:d(()=>[n(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:a(D)},{vue:d(()=>[n(v)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=t("h2",{id:"虚拟滚动",tabindex:"-1"},[l("虚拟滚动 "),t("a",{class:"header-anchor",href:"#虚拟滚动","aria-label":'Permalink to "虚拟滚动"'},"​")],-1)),e[13]||(e[13]=t("p",null,[l("虚拟滚动，仅渲染当前可见区域的数据，添加 "),t("code",null,"height"),l(" 属性即可开启虚拟滚动。")],-1)),s(n(a(u),null,null,512),[[i,o.value]]),n(r,null,{default:d(()=>[n(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:a(g)},{vue:d(()=>[n(T)]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=b("",5))])}}});export{V as __pageData,L as default};
