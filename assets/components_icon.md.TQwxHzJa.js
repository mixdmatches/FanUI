import{g as u,r as m,a as b,o as f,ah as h,J as l,c as t,f as o,av as r,u as a,w as s,b as p}from"./chunks/framework.DgEbPz_E.js";import{q as v,r as _,s as k}from"./chunks/theme.CJiqPplO.js";import{O as d,E as c}from"./chunks/index.C9Jnh23N.js";const S=`<template>
  <div class="flex gap-10 align-center">
    <f-icon :size="20">
      <Search></Search>
    </f-icon>
    <f-icon :size="30">
      <Search></Search>
    </f-icon>
    <f-icon :size="40">
      <Search></Search>
    </f-icon>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
<\/script>
`,g=`<template>
  <f-icon color="blue">
    <Search></Search>
  </f-icon>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
<\/script>
`,C=`<template>
  <f-icon>
    <Search></Search>
  </f-icon>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
<\/script>
`,V=JSON.parse('{"title":"Icon 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icon.md","filePath":"components/icon.md","lastUpdated":1749023909000}'),B={name:"components/icon.md"},W=Object.assign(B,{setup(A){const n=u(!0);return(D,e)=>{const i=m("ClientOnly");return f(),b("div",null,[e[3]||(e[3]=h('<h1 id="icon-图标" tabindex="-1">Icon 图标 <a class="header-anchor" href="#icon-图标" aria-label="Permalink to &quot;Icon 图标&quot;">​</a></h1><p>Fan-ui 推荐使用 <code>@icon-park/vue-next</code> 作为图标库</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @icon-park/vue-next</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>',4)),l(t(a(d),null,null,512),[[r,n.value]]),t(i,null,{default:s(()=>[t(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:a(C)},{vue:s(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=o("h2",{id:"更改颜色",tabindex:"-1"},[p("更改颜色 "),o("a",{class:"header-anchor",href:"#更改颜色","aria-label":'Permalink to "更改颜色"'},"​")],-1)),l(t(a(d),null,null,512),[[r,n.value]]),t(i,null,{default:s(()=>[t(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:a(g)},{vue:s(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=o("h2",{id:"更改大小",tabindex:"-1"},[p("更改大小 "),o("a",{class:"header-anchor",href:"#更改大小","aria-label":'Permalink to "更改大小"'},"​")],-1)),l(t(a(d),null,null,512),[[r,n.value]]),t(i,null,{default:s(()=>[t(a(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:a(S)},{vue:s(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=h('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="icon-props" tabindex="-1">Icon Props <a class="header-anchor" href="#icon-props" aria-label="Permalink to &quot;Icon Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td><code>string</code></td><td>undefined</td><td>图标颜色</td></tr><tr><td>size</td><td><code>string</code> | <code>number</code></td><td>undefined</td><td>图标大小</td></tr></tbody></table>',3))])}}});export{V as __pageData,W as default};
