import{g as m,r as h,c as f,o as b,a as s,p as d,b as t,al as u,e as l,S as r,u as n,w as a}from"./chunks/framework.Br5qlODI.js";import{a0 as g,a1 as v,a2 as k,a3 as _}from"./chunks/theme.COWshNnW.js";import{O as c,E as p}from"./chunks/index.CdocGXei.js";const y=`<template>
  <div>
    <f-button plain @click="open1">info</f-button>
    <f-button plain @click="open2">success</f-button>
    <f-button plain @click="open3">warning</f-button>
    <f-button plain @click="open4">error</f-button>
    <f-button plain @click="oprn5">duration = 0</f-button>
  </div>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'
const open1 = () => {
  FMessage({ type: 'info', message: 'info消息', plain: true, showClose: true })
}
const open2 = () => {
  FMessage({
    type: 'success',
    message: 'success消息',
    plain: true,
    showClose: true,
    duration: 5000
  })
}
const open3 = () => {
  FMessage({
    type: 'warning',
    message: 'warning消息',
    plain: true,
    showClose: true
  })
}
const open4 = () => {
  FMessage({
    type: 'error',
    message: 'error消息',
    plain: true,
    showClose: true
  })
}
const oprn5 = () => {
  FMessage({
    type: 'info',
    message: 'info消息',
    plain: true,
    showClose: true,
    duration: 0
  })
}
<\/script>
`,C=`<template>
  <div>
    <f-button plain @click="open1">info</f-button>
    <f-button plain @click="open2">success</f-button>
    <f-button plain @click="open3">warning</f-button>
    <f-button plain @click="open4">error</f-button>
  </div>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'
const open1 = () => {
  FMessage({ type: 'info', message: 'info消息', plain: true })
}
const open2 = () => {
  FMessage({ type: 'success', message: 'success消息', plain: true })
}
const open3 = () => {
  FMessage({ type: 'warning', message: 'warning消息', plain: true })
}
const open4 = () => {
  FMessage({ type: 'error', message: 'error消息', plain: true })
}
<\/script>
`,w=`<template>
  <div>
    <f-button plain @click="open1">info</f-button>
    <f-button plain @click="open2">success</f-button>
    <f-button plain @click="open3">warning</f-button>
    <f-button plain @click="open4">error</f-button>
  </div>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'
const open1 = () => {
  FMessage('info消息')
}
const open2 = () => {
  FMessage({ type: 'success', message: 'success消息' })
}
const open3 = () => {
  FMessage({ type: 'warning', message: 'warning消息' })
}
const open4 = () => {
  FMessage.error('error消息')
}
<\/script>
`,A=`<template>
  <f-button @click="handleMessage">show message</f-button>
</template>

<script setup lang="ts">
import { FMessage } from '@fan-ui/components'

const handleMessage = () => {
  FMessage('消息')
}
<\/script>
`,V=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md","lastUpdated":1760875895000}'),M={name:"components/message.md"},W=Object.assign(M,{setup(S){const o=m(!0);return(D,e)=>{const i=h("ClientOnly");return b(),f("div",null,[e[4]||(e[4]=s("h1",{id:"message-消息提示",tabindex:"-1"},[l("Message 消息提示 "),s("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),e[5]||(e[5]=s("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),e[6]||(e[6]=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[7]||(e[7]=s("p",null,"从顶部出现，3 秒后自动消失。",-1)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:n(A)},{vue:a(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=u("",3)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:n(w)},{vue:a(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=s("h2",{id:"纯色背景",tabindex:"-1"},[l("纯色背景 "),s("a",{class:"header-anchor",href:"#纯色背景","aria-label":'Permalink to "纯色背景"'},"​")],-1)),e[10]||(e[10]=s("p",null,[l("通过 "),s("code",null,"plain"),l(" 字段可以设置纯色背景。")],-1)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:n(C)},{vue:a(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=u("",3)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:n(y)},{vue:a(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=u("",6))])}}});export{V as __pageData,W as default};
