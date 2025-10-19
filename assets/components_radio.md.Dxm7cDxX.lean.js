import{g as p,r as f,c as m,o as b,al as n,p as s,b as t,a,S as u,u as d,w as r,e as i}from"./chunks/framework.Br5qlODI.js";import{ae as v,af as _,ag as g}from"./chunks/theme.COWshNnW.js";import{O as c,E as h}from"./chunks/index.CdocGXei.js";const A=`<template>
  <f-radio-group v-model="radio">
    <f-radio :value="3">Option A</f-radio>
    <f-radio :value="6">Option B</f-radio>
    <f-radio :value="9">Option C</f-radio>
  </f-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
<\/script>
`,S=`<template>
  <f-radio v-model="radio" disabled value="Option A">Option A</f-radio>
  <f-radio v-model="radio" disabled value="Option B"> Option B </f-radio>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('Option B')
<\/script>
`,T=`<template>
  <div class="mb-2 ml-4">
    <f-radio-group v-model="radio1">
      <f-radio value="1" size="large">Option 1</f-radio>
      <f-radio value="2" size="large">Option 2</f-radio>
    </f-radio-group>
  </div>
  <div class="my-2 ml-4">
    <f-radio-group v-model="radio2">
      <f-radio value="1">Option 1</f-radio>
      <f-radio value="2">Option 2</f-radio>
    </f-radio-group>
  </div>
  <div class="my-4 ml-4">
    <f-radio-group v-model="radio3">
      <f-radio value="1" size="small">Option 1</f-radio>
      <f-radio value="2" size="small">Option 2</f-radio>
    </f-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
<\/script>
`,W=JSON.parse('{"title":"Radio 单选框​","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md","lastUpdated":1760875895000}'),B={name:"components/radio.md"},x=Object.assign(B,{setup(C){const o=p(!0);return(D,e)=>{const l=f("ClientOnly");return b(),m("div",null,[e[3]||(e[3]=n("",5)),s(t(d(c),null,null,512),[[u,o.value]]),t(l,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:d(T)},{vue:r(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"禁用状态​",tabindex:"-1"},[i("禁用状态​ "),a("a",{class:"header-anchor",href:"#禁用状态​","aria-label":'Permalink to "禁用状态​"'},"​")],-1)),e[5]||(e[5]=a("p",null,[a("code",null,"disabled"),i(" 属性可以用来控制单选框的禁用状态。")],-1)),e[6]||(e[6]=a("p",null,[i("你只需要为单选框设置 "),a("code",null,"disabled"),i(" 属性就能控制其禁用状态")],-1)),s(t(d(c),null,null,512),[[u,o.value]]),t(l,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:d(S)},{vue:r(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=n("",3)),s(t(d(c),null,null,512),[[u,o.value]]),t(l,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:d(A)},{vue:r(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=n("",9))])}}});export{W as __pageData,x as default};
