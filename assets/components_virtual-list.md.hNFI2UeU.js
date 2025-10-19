import{g as p,r as c,c as h,o as b,a as e,p as r,b as n,al as v,e as s,S as i,u as a,w as d}from"./chunks/framework.Br5qlODI.js";import{as as f,at as y,au as S}from"./chunks/theme.COWshNnW.js";import{O as u,E as m}from"./chunks/index.CdocGXei.js";const k=`<template>
  <f-virtual-scroll-list
    class="virtual-list"
    :data-sources="sources"
    data-key="id"
    :keeps="20"
    :estimateSize="30"
  >
    <template #default="{ dataSource }">
      <div class="item" :data-index="dataSource.index">
        <div class="head">
          <span>{{ dataSource.id }}</span>
          <span>{{ dataSource.name }}</span>
        </div>
        <div class="body" :style="{ fontSize: '18px' }">
          {{ dataSource.desc }}
        </div>
      </div>
    </template>
  </f-virtual-scroll-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import pkg from 'mockjs'
const { Random } = pkg
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
    desc: Random.csentence(20),
    index
  })
}
const sources = ref(data)
<\/script>

<style lang="scss" scoped>
.virtual-list {
  height: 500px;
  overflow: auto;
}
.item {
  height: 50px;
}
</style>
`,g=`<template>
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
<\/script>

<style lang="scss" scoped>
.virtual-list {
  height: 500px;
  overflow: auto;
}
</style>
`,x=`<template>
  <f-virtual-scroll-list
    class="virtual-list"
    :data-sources="sources"
    data-key="id"
    :keeps="20"
    :dataComponent="Item"
  >
  </f-virtual-scroll-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Item from './item.vue'
import pkg from 'mockjs'
const { Random } = pkg
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
    desc: Random.csentence(20),
    index
  })
}
const sources = ref(data)
<\/script>

<style lang="scss" scoped>
.virtual-list {
  height: 500px;
  overflow: auto;
}
</style>
`,w=JSON.parse('{"title":"VirtualScrollList 虚拟滚动列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/virtual-list.md","filePath":"components/virtual-list.md","lastUpdated":1760875895000}'),V={name:"components/virtual-list.md"},B=Object.assign(V,{setup(C){const l=p(!0);return(W,t)=>{const o=c("ClientOnly");return b(),h("div",null,[t[3]||(t[3]=e("h1",{id:"virtualscrolllist-虚拟滚动列表",tabindex:"-1"},[s("VirtualScrollList 虚拟滚动列表 "),e("a",{class:"header-anchor",href:"#virtualscrolllist-虚拟滚动列表","aria-label":'Permalink to "VirtualScrollList 虚拟滚动列表"'},"​")],-1)),t[4]||(t[4]=e("p",null,"在大数据量场景下使用，之渲染可视区域的dom元素，减少渲染的dom数量，提升渲染效率。",-1)),t[5]||(t[5]=e("h2",{id:"定高",tabindex:"-1"},[s("定高 "),e("a",{class:"header-anchor",href:"#定高","aria-label":'Permalink to "定高"'},"​")],-1)),t[6]||(t[6]=e("p",null,"每一项列表高度固定的话，就可以根据当前滚动的位置计算出当前需要展示的列表项的索引范围。",-1)),r(n(a(u),null,null,512),[[i,l.value]]),n(o,null,{default:d(()=>[n(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{l.value=!1}),vueCode:a(x)},{vue:d(()=>[n(f)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=e("h2",{id:"不定高",tabindex:"-1"},[s("不定高 "),e("a",{class:"header-anchor",href:"#不定高","aria-label":'Permalink to "不定高"'},"​")],-1)),t[8]||(t[8]=e("p",null,"每一项列表高度不定的话，就需要给组件传递estimate-size属性，传递每一项大概的高度",-1)),r(n(a(u),null,null,512),[[i,l.value]]),n(o,null,{default:d(()=>[n(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{l.value=!1}),vueCode:a(g)},{vue:d(()=>[n(y)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"插槽",tabindex:"-1"},[s("插槽 "),e("a",{class:"header-anchor",href:"#插槽","aria-label":'Permalink to "插槽"'},"​")],-1)),t[10]||(t[10]=e("p",null,[s("可以用默认插槽代替 "),e("code",null,"dataComponent"),s("，插槽提供数据项")],-1)),r(n(a(u),null,null,512),[[i,l.value]]),n(o,null,{default:d(()=>[n(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{l.value=!1}),vueCode:a(k)},{vue:d(()=>[n(S)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=v('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>data-sources</td><td>Array</td><td>[]</td><td>列表数据</td></tr><tr><td>data-key</td><td>String</td><td>-</td><td>列表数据的key，唯一标识</td></tr><tr><td>keeps</td><td>Number</td><td>30</td><td>渲染的dom元素个数</td></tr><tr><td>estimate-size</td><td>Number</td><td>80</td><td>每一项的大概高度</td></tr><tr><td>dataComponent</td><td>Object</td><td>-</td><td>列表项组件</td></tr></tbody></table><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>handleScroll</td><td>滚动时触发</td><td>滚动信息</td></tr></tbody></table>',5))])}}});export{w as __pageData,B as default};
