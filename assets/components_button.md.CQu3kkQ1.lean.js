import{f as p,r as h,a as b,o as m,ag as l,I as c,c as e,e as n,au as i,u as d,w as a,b as f}from"./chunks/framework.Ck_omlE8.js";import{_ as y,T as g}from"./chunks/theme.D8C8uZfs.js";import{O as s,E as u}from"./chunks/index.BjrPRfaW.js";const _=`<template>
  <f-button type="primary" loading>Loading</f-button>
  <f-button type="primary" loading>
    <template #loading>
      <LoadingOne class="custom-loading" />
    </template>
    Loading
  </f-button>
</template>

<script lang="ts" setup>
import { LoadingOne } from '@icon-park/vue-next'
<\/script>

<style scoped>
.f-button .custom-loading {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 125.66;
  stroke-dashoffset: 0;
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
`,v=`<template>
  <div>
    <f-button type="primary" :icon="Edit" />
    <f-button type="primary" :icon="Share" />
    <f-button type="primary" :icon="Delete" />
    <f-button type="primary" :icon="Search">Search</f-button>
    <f-button type="primary">
      Upload<f-icon class="f-icon--right"><Upload /></f-icon>
    </f-button>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@icon-park/vue-next'
<\/script>
`,q=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1748534794000}'),k={name:"components/button.md"},P=Object.assign(k,{setup(S){const o=p(!0);return(T,t)=>{const r=h("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=l("",12)),c(e(d(s),null,null,512),[[i,o.value]]),e(r,null,{default:a(()=>[e(d(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(v)},{vue:a(()=>[e(y)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=n("h2",{id:"加载状态",tabindex:"-1"},[f("加载状态 "),n("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1)),t[4]||(t[4]=n("p",null,"点击按钮后进行数据加载操作，在按钮上显示加载状态。",-1)),c(e(d(s),null,null,512),[[i,o.value]]),e(r,null,{default:a(()=>[e(d(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:d(_)},{vue:a(()=>[e(g)]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=l("",5))])}}});export{q as __pageData,P as default};
