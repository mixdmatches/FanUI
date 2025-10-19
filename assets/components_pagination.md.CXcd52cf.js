import{g as m,r as h,c,o as b,a as t,p as s,b as a,al as f,e as l,S as i,u as n,w as r}from"./chunks/framework.Br5qlODI.js";import{a4 as v,a5 as g,a6 as S,a7 as B,a8 as D}from"./chunks/theme.COWshNnW.js";import{O as u,E as p}from"./chunks/index.CdocGXei.js";const A=`<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(2)
<\/script>

<template>
  <f-pagination v-model:current="currentPage" show-total :total="500">
    <template #prev> prev </template>
    <template #next> next </template>
  </f-pagination>
</template>
`,C=`<script lang="ts" setup>
import { ref } from 'vue'
const currentPage = ref(2)
<\/script>

<template>
  <f-pagination
    v-model:current="currentPage"
    :total="50"
    show-jumper
  ></f-pagination>
</template>
`,w=`<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(4)
const pageSizeCurrent = ref(10)
<\/script>

<template>
  <f-pagination
    v-model:current="currentPage"
    v-model:page-size="pageSizeCurrent"
    :total="500"
    show-total
    :page-size-options="[5, 10, 15, 20]"
  ></f-pagination>
</template>
`,T=`<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(2)
const handleChange = (current: number, pageSize: number) => {
  console.log(current, pageSize)
}
<\/script>

<template>
  <f-pagination
    v-model:current="currentPage"
    show-total
    :total="500"
    @change="handleChange"
  ></f-pagination>
</template>
`,W=`<script lang="ts" setup>
import { ref } from 'vue'
const currentPage = ref(2)
<\/script>

<template>
  <f-pagination v-model:current="currentPage" :total="50"></f-pagination>
</template>
`,z=JSON.parse('{"title":"分页组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1760875895000}'),G={name:"components/pagination.md"},Y=Object.assign(G,{setup(V){const o=m(!0);return(k,e)=>{const d=h("ClientOnly");return b(),c("div",null,[e[5]||(e[5]=t("h1",{id:"分页组件",tabindex:"-1"},[l("分页组件 "),t("a",{class:"header-anchor",href:"#分页组件","aria-label":'Permalink to "分页组件"'},"​")],-1)),e[6]||(e[6]=t("p",null,"采用分页的形式分隔长列表，每次只加载一个页面。",-1)),e[7]||(e[7]=t("h2",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[8]||(e[8]=t("p",null,"这是一个基本分页",-1)),s(a(n(u),null,null,512),[[i,o.value]]),a(d,null,{default:r(()=>[a(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:n(W)},{vue:r(()=>[a(v)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"更多",tabindex:"-1"},[l("更多 "),t("a",{class:"header-anchor",href:"#更多","aria-label":'Permalink to "更多"'},"​")],-1)),e[10]||(e[10]=t("p",null,[l("更多分页，设置 "),t("code",null,"showTotal"),l(" 属性 ，但仅当 "),t("code",null,"total"),l(" 大于 50 时显示")],-1)),s(a(n(u),null,null,512),[[i,o.value]]),a(d,null,{default:r(()=>[a(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:n(T)},{vue:r(()=>[a(g)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=t("h2",{id:"自定义分页大小",tabindex:"-1"},[l("自定义分页大小 "),t("a",{class:"header-anchor",href:"#自定义分页大小","aria-label":'Permalink to "自定义分页大小"'},"​")],-1)),e[12]||(e[12]=t("p",null,[l("可自定义分页大小，默认是 "),t("code",null,"[10, 20, 30, 40]")],-1)),s(a(n(u),null,null,512),[[i,o.value]]),a(d,null,{default:r(()=>[a(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:n(w)},{vue:r(()=>[a(S)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=t("h2",{id:"跳转分页",tabindex:"-1"},[l("跳转分页 "),t("a",{class:"header-anchor",href:"#跳转分页","aria-label":'Permalink to "跳转分页"'},"​")],-1)),e[14]||(e[14]=t("p",null,[l("可设置属性 "),t("code",null,"showJumper"),l(" 为 "),t("code",null,"true"),l(" 显示跳转分页")],-1)),s(a(n(u),null,null,512),[[i,o.value]]),a(d,null,{default:r(()=>[a(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:n(C)},{vue:r(()=>[a(B)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=t("h2",{id:"自定义上下页",tabindex:"-1"},[l("自定义上下页 "),t("a",{class:"header-anchor",href:"#自定义上下页","aria-label":'Permalink to "自定义上下页"'},"​")],-1)),e[16]||(e[16]=t("p",null,[l("可自定义上下页的内容，通过 "),t("code",null,"#prev"),l(" 和 "),t("code",null,"#next"),l(" 插槽自定义")],-1)),s(a(n(u),null,null,512),[[i,o.value]]),a(d,null,{default:r(()=>[a(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{o.value=!1}),vueCode:n(A)},{vue:r(()=>[a(D)]),_:1},8,["vueCode"])]),_:1}),e[17]||(e[17]=f('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model:current</td><td>当前页码</td><td>number</td><td><code>1</code></td></tr><tr><td>v-model:pageSize</td><td>每页条数</td><td>number</td><td><code>10</code></td></tr><tr><td>total</td><td>总数据条数</td><td>number</td><td><code>0</code></td></tr><tr><td>showTotal</td><td>是否显示总数据条数</td><td>boolean</td><td><code>false</code></td></tr><tr><td>showJumper</td><td>是否显示跳转分页</td><td>boolean</td><td><code>false</code></td></tr><tr><td>pageSizeOptions</td><td>分页大小选项</td><td>number[]</td><td><code>[10, 20, 30, 40]</code></td></tr></tbody></table><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>change</td><td>页码或每页条数改变时触发</td><td>(current: number, pageSize: number) =&gt; void</td></tr></tbody></table>',5))])}}});export{z as __pageData,Y as default};
