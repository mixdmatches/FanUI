import{f as p,r as h,a as b,o as m,am as l,a5 as c,c as e,e as n,an as i,u as d,w as a,b as f}from"./chunks/framework.C1Ulg0rN.js";import{_ as y,T as _}from"./chunks/theme.DGTHpQYW.js";import{O as s,E as u}from"./chunks/index.CturKxrw.js";const g=`<template>
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
`,q=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md","lastUpdated":1747981936000}'),k={name:"components/button.md"},P=Object.assign(k,{setup(S){const o=p(!0);return(T,t)=>{const r=h("ClientOnly");return m(),b("div",null,[t[2]||(t[2]=l('<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用的操作按钮。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用 type、plain、round 和 circle 来定义按钮的样式。</p><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>你可以使用 <code>disabled</code> 属性来定义按钮是否被禁用。</p><p>使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 <code>Boolean</code> 类型的值</p><h2 id="链接按钮" tabindex="-1">链接按钮 <a class="header-anchor" href="#链接按钮" aria-label="Permalink to &quot;链接按钮&quot;">​</a></h2><h2 id="文字按钮" tabindex="-1">文字按钮 <a class="header-anchor" href="#文字按钮" aria-label="Permalink to &quot;文字按钮&quot;">​</a></h2><p>没有背景和边框的按钮</p><h2 id="图标按钮" tabindex="-1">图标按钮 <a class="header-anchor" href="#图标按钮" aria-label="Permalink to &quot;图标按钮&quot;">​</a></h2><p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>',12)),c(e(d(s),null,null,512),[[i,o.value]]),e(r,null,{default:a(()=>[e(d(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(v)},{vue:a(()=>[e(y)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=n("h2",{id:"加载状态",tabindex:"-1"},[f("加载状态 "),n("a",{class:"header-anchor",href:"#加载状态","aria-label":'Permalink to "加载状态"'},"​")],-1)),t[4]||(t[4]=n("p",null,"点击按钮后进行数据加载操作，在按钮上显示加载状态。",-1)),c(e(d(s),null,null,512),[[i,o.value]]),e(r,null,{default:a(()=>[e(d(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:d(g)},{vue:a(()=>[e(_)]),_:1},8,["vueCode"])]),_:1}),t[5]||(t[5]=l('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td><code>ButtonSizeType</code></td><td><code>&#39;default&#39;</code></td><td>按钮大小，可选值为 <code>&#39;large&#39;</code>, <code>&#39;default&#39;</code>, <code>&#39;small&#39;</code></td></tr><tr><td>type</td><td><code>ButtonType</code></td><td><code>&#39;default&#39;</code></td><td>按钮类型，可选值为 <code>&#39;default&#39;</code>, <code>&#39;primary&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code></td></tr><tr><td>plain</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为朴素按钮</td></tr><tr><td>round</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为圆角按钮</td></tr><tr><td>circle</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为圆形按钮</td></tr><tr><td>icon</td><td><code>string | Record&lt;string, unknown&gt;</code></td><td>-</td><td>按钮图标，可以是字符串或组件对象</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用按钮</td></tr><tr><td>link</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为链接按钮</td></tr><tr><td>text</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为文字按钮</td></tr><tr><td>bg</td><td><code>boolean</code></td><td><code>false</code></td><td>是否有背景</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为加载状态</td></tr><tr><td>tag</td><td><code>string</code></td><td><code>&#39;button&#39;</code></td><td>按钮渲染的标签</td></tr><tr><td>nativeType</td><td><code>ButtonNativeType</code></td><td><code>&#39;button&#39;</code></td><td>原生按钮类型</td></tr><tr><td>iconPlasement</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td><td>图标位置</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时触发</td><td><code>MouseEvent</code> 事件对象</td></tr></tbody></table>',5))])}}});export{q as __pageData,P as default};
