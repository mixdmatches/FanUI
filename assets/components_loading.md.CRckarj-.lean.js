import{g as h,r as p,c as m,o as g,al as f,p as i,b as t,a,S as s,u as n,w as d,e as l}from"./chunks/framework.Br5qlODI.js";import{Y as b,Z as v,$ as _}from"./chunks/theme.COWshNnW.js";import{O as u,E as c}from"./chunks/index.CdocGXei.js";const T=`<template>
  <f-button
    v-loading.fullscreen.lock="fullscreenLoading"
    fan-loading-text="加载中"
    type="primary"
    @click="openFullScreen1"
    >指令加载全屏loading</f-button
  >
  <f-button type="primary" @click="openFullScreen2"
    >服务加载全屏loading</f-button
  >
</template>

<script setup lang="ts">
import { FLoading } from '@fan-ui/components'
import { ref } from 'vue'
const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
  fullscreenLoading.value = true
  setTimeout(() => {
    fullscreenLoading.value = false
  }, 2000)
}
const openFullScreen2 = () => {
  const loading = FLoading.service({
    text: '加载中，请稍后',
    lock: true,
    background: 'rgba(0, 0, 0, 0.5)'
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
}
<\/script>
`,S=`<template>
  <f-card title="服务加载" ref="target" id="test">
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </f-card>
</template>

<script setup lang="ts">
import { FLoading } from '@fan-ui/components'
import { onMounted } from 'vue'

onMounted(() => {
  const loading = FLoading.service({
    target: '#test',
    text: '加载中，请稍后'
  })
  setTimeout(() => {
    loading.close()
  }, 10000)
})
<\/script>
`,k=`<template>
  <f-card
    title="区域加载"
    v-loading="loading"
    fan-loading-text="Loading..."
    fan-loading-background="rgba(122, 122, 122, 0.8)"
  >
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </f-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 10000)
<\/script>
`,V=JSON.parse('{"title":"Loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading.md","filePath":"components/loading.md","lastUpdated":1760875895000}'),y={name:"components/loading.md"},G=Object.assign(y,{setup(A){const o=h(!0);return(D,e)=>{const r=p("ClientOnly");return g(),m("div",null,[e[3]||(e[3]=f("",4)),i(t(n(u),null,null,512),[[s,o.value]]),t(r,null,{default:d(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:n(k)},{vue:d(()=>[t(b)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"服务式调用加载",tabindex:"-1"},[l("服务式调用加载 "),a("a",{class:"header-anchor",href:"#服务式调用加载","aria-label":'Permalink to "服务式调用加载"'},"​")],-1)),e[5]||(e[5]=a("p",null,[l("通过 "),a("code",null,"FLoading.service()"),l(" 方法以编程方式控制加载状态，支持指定目标元素。")],-1)),i(t(n(u),null,null,512),[[s,o.value]]),t(r,null,{default:d(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:n(S)},{vue:d(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=a("h2",{id:"全屏loading",tabindex:"-1"},[l("全屏loading "),a("a",{class:"header-anchor",href:"#全屏loading","aria-label":'Permalink to "全屏loading"'},"​")],-1)),e[7]||(e[7]=a("p",null,"支持全屏显示加载状态，可锁定背景防止交互。",-1)),i(t(n(u),null,null,512),[[s,o.value]]),t(r,null,{default:d(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:n(T)},{vue:d(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=f("",5))])}}});export{V as __pageData,G as default};
