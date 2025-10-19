import{g as p,r as b,c as f,o as m,a as e,p as i,b as o,al as h,e as a,S as s,u as n,w as l}from"./chunks/framework.Br5qlODI.js";import{_ as y,h as v,i as g,j as k,k as B,l as S}from"./chunks/theme.COWshNnW.js";import{O as u,E as c}from"./chunks/index.CdocGXei.js";const D=`<template>
  <f-button type="primary" loading>Loading</f-button>
  <f-button type="primary" loading>
    <template #loading>
      <LoadingOne class="custom-loading" />
    </template>
    Loading
  </f-button>
  <f-button type="danger" loading></f-button>
  <f-button type="danger" loading circle plain></f-button>
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
`,A=`<template>
  <div>
    <f-button type="primary" :icon="Edit" />
    <f-button type="primary" plain :icon="Share" />
    <f-button type="danger" :icon="Delete" />
    <f-button type="primary" :icon="Search">Search</f-button>
    <f-button type="primary">
      Upload<f-icon class="f-icon--right"><Upload /></f-icon>
    </f-button>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@icon-park/vue-next'
<\/script>
`,V=`<template>
  <f-button text>default</f-button>
  <f-button text type="primary" plain>primary</f-button>
  <f-button text type="success" round>success</f-button>
  <f-button text type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
<\/script>
`,W=`<template>
  <f-button link>default</f-button>
  <f-button link type="primary" plain>primary</f-button>
  <f-button link type="success" round>success</f-button>
  <f-button link type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
<\/script>
`,x=`<template>
  <f-button disabled>default</f-button>
  <f-button disabled type="primary" plain>primary</f-button>
  <f-button disabled type="success" round>success</f-button>
  <f-button disabled type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
<\/script>
`,C=`<template>
  <f-button>default</f-button>
  <f-button type="primary" plain>primary</f-button>
  <f-button type="success" round>success</f-button>
  <f-button type="info" circle :icon="Mail"></f-button>
</template>

<script lang="ts" setup>
import { Mail } from '@icon-park/vue-next'
<\/script>
`,z=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1760875895000}'),G={name:"components/button.md"},M=Object.assign(G,{setup(T){const d=p(!0);return(w,t)=>{const r=b("ClientOnly");return m(),f("div",null,[t[6]||(t[6]=e("h1",{id:"button-按钮",tabindex:"-1"},[a("Button 按钮 "),e("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1)),t[7]||(t[7]=e("p",null,"常用的操作按钮。",-1)),t[8]||(t[8]=e("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[9]||(t[9]=e("p",null,"使用 type、plain、round 和 circle 来定义按钮的样式。",-1)),i(o(n(u),null,null,512),[[s,d.value]]),o(r,null,{default:l(()=>[o(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:n(C)},{vue:l(()=>[o(y)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=e("h2",{id:"禁用状态",tabindex:"-1"},[a("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),t[11]||(t[11]=e("p",null,[a("你可以使用 "),e("code",null,"disabled"),a(" 属性来定义按钮是否被禁用。")],-1)),t[12]||(t[12]=e("p",null,[a("使用 "),e("code",null,"disabled"),a(" 属性来控制按钮是否为禁用状态。 该属性接受一个 "),e("code",null,"Boolean"),a(" 类型的值")],-1)),i(o(n(u),null,null,512),[[s,d.value]]),o(r,null,{default:l(()=>[o(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{d.value=!1}),vueCode:n(x)},{vue:l(()=>[o(v)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=e("h2",{id:"链接按钮",tabindex:"-1"},[a("链接按钮 "),e("a",{class:"header-anchor",href:"#链接按钮","aria-label":'Permalink to "链接按钮"'},"​")],-1)),i(o(n(u),null,null,512),[[s,d.value]]),o(r,null,{default:l(()=>[o(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{d.value=!1}),vueCode:n(W)},{vue:l(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),t[14]||(t[14]=e("h2",{id:"文字按钮",tabindex:"-1"},[a("文字按钮 "),e("a",{class:"header-anchor",href:"#文字按钮","aria-label":'Permalink to "文字按钮"'},"​")],-1)),t[15]||(t[15]=e("p",null,"没有背景和边框的按钮",-1)),i(o(n(u),null,null,512),[[s,d.value]]),o(r,null,{default:l(()=>[o(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{d.value=!1}),vueCode:n(V)},{vue:l(()=>[o(k)]),_:1},8,["vueCode"])]),_:1}),t[16]||(t[16]=e("h2",{id:"图标按钮",tabindex:"-1"},[a("图标按钮 "),e("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),t[17]||(t[17]=e("p",null,"使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。",-1)),i(o(n(u),null,null,512),[[s,d.value]]),o(r,null,{default:l(()=>[o(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{d.value=!1}),vueCode:n(A)},{vue:l(()=>[o(B)]),_:1},8,["vueCode"])]),_:1}),t[18]||(t[18]=e("h2",{id:"加载状态",tabindex:"-1"},[a("加载状态 "),e("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1)),t[19]||(t[19]=e("p",null,"点击按钮后进行数据加载操作，在按钮上显示加载状态。",-1)),i(o(n(u),null,null,512),[[s,d.value]]),o(r,null,{default:l(()=>[o(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{d.value=!1}),vueCode:n(D)},{vue:l(()=>[o(S)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td><code>ButtonSizeType</code></td><td><code>default</code></td><td>按钮大小，可选值为 <code>large</code>, <code>default</code>, <code>small</code></td></tr><tr><td>type</td><td><code>ButtonType</code></td><td><code>default</code></td><td>按钮类型，可选值为 <code>default</code>, <code>primary</code>, <code>success</code>, <code>info</code>, <code>danger</code>, <code>&#39;warning&#39;</code></td></tr><tr><td>plain</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为朴素按钮</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为圆角按钮</td></tr><tr><td>circle</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为圆形按钮</td></tr><tr><td>icon</td><td><code>string | Record&lt;string, unknown&gt;</code></td><td>-</td><td>按钮图标，可以是字符串或组件对象</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用按钮</td></tr><tr><td>link</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为链接按钮</td></tr><tr><td>text</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为文字按钮</td></tr><tr><td>bg</td><td><code>boolean</code></td><td><code>false</code></td><td>是否有背景</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为加载状态</td></tr><tr><td>tag</td><td><code>string</code></td><td><code>button</code></td><td>按钮渲染的标签</td></tr><tr><td>nativeType</td><td><code>ButtonNativeType</code></td><td><code>button</code></td><td>原生按钮类型</td></tr><tr><td>iconPlasement</td><td><code>left | right</code></td><td><code>left</code></td><td>图标位置</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td><code>MouseEvent</code> 事件对象</td></tr></tbody></table>',5))])}}});export{z as __pageData,M as default};
