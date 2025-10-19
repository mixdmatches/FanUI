import{g as m,r as p,c as f,o as h,a as l,p as b,b as t,al as c,e as a,S as s,u as n,w as d}from"./chunks/framework.Br5qlODI.js";import{b as v,c as g,d as S,e as V,f as y,g as W}from"./chunks/theme.COWshNnW.js";import{O as u,E as r}from"./chunks/index.CdocGXei.js";const Y=`<template>
  <div>
    <f-bubble content="hello" :avatarConfig="{ imgSrc: '/FanUI/logo.png' }">
      <template #top>
        <div class="bubble-top-area">
          <span>FanUIChat</span>
        </div>
      </template>
      <template #bottom>
        <div class="bubble-bottom-area">
          <f-icon>
            <thumbs-up theme="outline" size="24" fill="#abb2bd" />
          </f-icon>
          <f-icon>
            <thumbs-down theme="outline" size="24" fill="#abb2bd" />
          </f-icon>
          <f-icon>
            <copy theme="outline" size="24" fill="#abb2bd" />
          </f-icon>
        </div>
      </template>
    </f-bubble>
  </div>
</template>

<script setup lang="ts">
import { ThumbsUp, ThumbsDown, Copy } from '@icon-park/vue-next'
<\/script>

<style scoped>
.bubble-bottom-area {
  display: flex;
  gap: 4px;
}
</style>
`,C=`<template>
  <div class="demo-container">
    <f-bubble
      content="hello,FanUI"
      align="right"
      :avatarConfig="userConfig"
    ></f-bubble>
    <f-bubble content="hello" :avatarConfig="{}" align="right"></f-bubble>
    <f-bubble
      content="Hello, what can I do for you?"
      :avatarConfig="modelConfig"
    ></f-bubble>
    <f-bubble
      content="You can ask me everything~"
      :avatarConfig="{}"
    ></f-bubble>
    <f-bubble
      content="hello,FanUI"
      align="right"
      :avatarConfig="userTopConfig"
      avatarPosition="top"
    ></f-bubble>
    <f-bubble
      content="Hello, what can I do for you?"
      :avatarConfig="modelTopConfig"
      avatarPosition="top"
    ></f-bubble>
  </div>
</template>

<script setup lang="ts">
const userConfig = {
  imgSrc: '/FanUI/logo.png',
  displayName: 'User',
  isRound: true
}
const modelConfig = {
  imgSrc: '/FanUI/logo.png',
  displayName: 'Model',
  isRound: true
}
const userTopConfig = {
  ...userConfig,
  displayName: 'User'
}
const modelTopConfig = {
  ...modelConfig,
  displayName: 'Model'
}
<\/script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
`,T=`<template>
  <div class="demo-container">
    <f-bubble content="这是一个左对齐的气泡" align="left" />
    <f-bubble content="这是一个右对齐的气泡" align="right" />
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
`,A=`<template>
  <div style="display: flex">
    <f-bubble variant="none" content="hello,FanUI"></f-bubble>
    <f-bubble variant="border" content="hello,FanUI"></f-bubble>
    <f-bubble content="hello,FanUI"></f-bubble>
  </div>
</template>
`,B=`<template>
  <div>
    <f-bubble
      :avatarConfig="{ imgSrc: '/FanUI/logo.png' }"
      :loading="true"
    ></f-bubble>
    <f-bubble :avatarConfig="{ imgSrc: '/FanUI/logo.png' }" :loading="true">
      <template #loading> The model is thinking ...... </template>
    </f-bubble>
  </div>
</template>
`,D=`<template>
  <div>
    <f-bubble content="hello,fanUI"></f-bubble>
  </div>
</template>
`,_=JSON.parse('{"title":"Bubble 气泡","description":"","frontmatter":{},"headers":[],"relativePath":"components/bubble.md","filePath":"components/bubble.md","lastUpdated":1760875895000}'),G={name:"components/bubble.md"},L=Object.assign(G,{setup(x){const o=m(!0);return(k,e)=>{const i=p("ClientOnly");return h(),f("div",null,[e[6]||(e[6]=l("h1",{id:"bubble-气泡",tabindex:"-1"},[a("Bubble 气泡 "),l("a",{class:"header-anchor",href:"#bubble-气泡","aria-label":'Permalink to "Bubble 气泡"'},"​")],-1)),e[7]||(e[7]=l("h2",{id:"基本使用",tabindex:"-1"},[a("基本使用 "),l("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),e[8]||(e[8]=l("p",null,[a("基本用法只需要传入 "),l("code",null,"content"),a(" 即可")],-1)),b(t(n(u),null,null,512),[[s,o.value]]),t(i,null,{default:d(()=>[t(n(r),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:n(D)},{vue:d(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=c('<h2 id="显示loading状态" tabindex="-1">显示Loading状态 <a class="header-anchor" href="#显示loading状态" aria-label="Permalink to &quot;显示Loading状态&quot;">​</a></h2><p>当设置 <code>loading</code> 为 <code>true</code> 时，将不会显示气泡内的其他区域。我们内置了一个默认的 <code>loading</code> 状态，如果不满足你的使用需求，可以通过 <code>loading</code> 插槽来自定义 <code>loading</code></p>',2)),b(t(n(u),null,null,512),[[s,o.value]]),t(i,null,{default:d(()=>[t(n(r),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:n(B)},{vue:d(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=c('<h2 id="气泡样式" tabindex="-1">气泡样式 <a class="header-anchor" href="#气泡样式" aria-label="Permalink to &quot;气泡样式&quot;">​</a></h2><p>默认为 <code>filled</code>，还可以设置 <code>bordered</code> 和 <code>none</code>，其中 <code>filled</code> 和 <code>bordered</code> 我们为其设置了间距和圆角，<code>none</code> 则不带任何样式</p>',2)),b(t(n(u),null,null,512),[[s,o.value]]),t(i,null,{default:d(()=>[t(n(r),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:n(A)},{vue:d(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=l("h2",{id:"气泡对齐方式",tabindex:"-1"},[a("气泡对齐方式 "),l("a",{class:"header-anchor",href:"#气泡对齐方式","aria-label":'Permalink to "气泡对齐方式"'},"​")],-1)),e[12]||(e[12]=l("p",null,[a("提供了 "),l("code",null,"left"),a(" 和 "),l("code",null,"right"),a(" 两种对齐方式，区分用户提问和模型回答")],-1)),b(t(n(u),null,null,512),[[s,o.value]]),t(i,null,{default:d(()=>[t(n(r),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:n(T)},{vue:d(()=>[t(V)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=l("h2",{id:"配置头像",tabindex:"-1"},[a("配置头像 "),l("a",{class:"header-anchor",href:"#配置头像","aria-label":'Permalink to "配置头像"'},"​")],-1)),e[14]||(e[14]=l("p",null,[a("默认的我们的头像将显示在侧边，你也可以通过 "),l("code",null,"avatarPosition"),a(" 将其显示在气泡上方")],-1)),b(t(n(u),null,null,512),[[s,o.value]]),t(i,null,{default:d(()=>[t(n(r),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{o.value=!1}),vueCode:n(C)},{vue:d(()=>[t(y)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=l("h2",{id:"自定义气泡操作区域",tabindex:"-1"},[a("自定义气泡操作区域 "),l("a",{class:"header-anchor",href:"#自定义气泡操作区域","aria-label":'Permalink to "自定义气泡操作区域"'},"​")],-1)),e[16]||(e[16]=l("p",null,[a("我们还为气泡提供了 "),l("code",null,"top"),a(" 和 "),l("code",null,"bottom"),a(" 两个自定义区域，方便你实现一些自定义需求")],-1)),b(t(n(u),null,null,512),[[s,o.value]]),t(i,null,{default:d(()=>[t(n(r),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[5]||(e[5]=()=>{o.value=!1}),vueCode:n(Y)},{vue:d(()=>[t(W)]),_:1},8,["vueCode"])]),_:1}),e[17]||(e[17]=c('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>气泡内容</td><td><code>string</code></td><td>-</td></tr><tr><td>variant</td><td>气泡样式</td><td><code>filled</code> | <code>bordered</code> | <code>none</code></td><td><code>filled</code></td></tr><tr><td>align</td><td>气泡对齐方式</td><td><code>left</code> | <code>right</code></td><td><code>right</code></td></tr><tr><td>avatarConfig</td><td>头像配置</td><td>AvatarConfigType</td><td>-</td></tr><tr><td>avatarPosition</td><td>头像位置</td><td><code>left</code> | <code>top</code></td><td><code>left</code></td></tr><tr><td>loading</td><td>是否显示加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',3))])}}});export{_ as __pageData,L as default};
