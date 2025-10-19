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
`,V=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message.md","filePath":"components/message.md","lastUpdated":1760875895000}'),M={name:"components/message.md"},W=Object.assign(M,{setup(S){const o=m(!0);return(D,e)=>{const i=h("ClientOnly");return b(),f("div",null,[e[4]||(e[4]=s("h1",{id:"message-消息提示",tabindex:"-1"},[l("Message 消息提示 "),s("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),e[5]||(e[5]=s("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),e[6]||(e[6]=s("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[7]||(e[7]=s("p",null,"从顶部出现，3 秒后自动消失。",-1)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:n(A)},{vue:a(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=u('<h2 id="不同状态​" tabindex="-1">不同状态​ <a class="header-anchor" href="#不同状态​" aria-label="Permalink to &quot;不同状态​&quot;">​</a></h2><p>用来显示「成功、警告、消息、错误」类的操作反馈。</p><p>当需要自定义更多属性时，<code>Message</code> 也可以接收一个对象为参数。 比如，设置 <code>type</code> 字段可以定义不同的状态，默认为<code>info</code>。 此时正文内容以 <code>message</code> 的值传入。 同时，我们也为 <code>Message</code> 的各种 <code>type</code> 注册了方法，可以在不传入 <code>type</code> 字段的情况下像 <code>open4</code> 那样直接调用。</p>',3)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:n(w)},{vue:a(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=s("h2",{id:"纯色背景",tabindex:"-1"},[l("纯色背景 "),s("a",{class:"header-anchor",href:"#纯色背景","aria-label":'Permalink to "纯色背景"'},"​")],-1)),e[10]||(e[10]=s("p",null,[l("通过 "),s("code",null,"plain"),l(" 字段可以设置纯色背景。")],-1)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:n(C)},{vue:a(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=u('<h2 id="可关闭的消息提示​" tabindex="-1">可关闭的消息提示​ <a class="header-anchor" href="#可关闭的消息提示​" aria-label="Permalink to &quot;可关闭的消息提示​&quot;">​</a></h2><p>可以添加关闭按钮。</p><p>默认的 <code>Message</code> 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 <code>showClose</code> 设置为 <code>true</code> 此外<code>Message</code> 拥有可控的 <code>duration</code>， 默认的关闭时间为 <code>3000</code> 毫秒，当把这个属性的值设置为<code>0</code>便表示该消息不会被自动关闭。</p>',3)),d(t(n(c),null,null,512),[[r,o.value]]),t(i,null,{default:a(()=>[t(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:n(y)},{vue:a(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=u('<h2 id="单独引用​" tabindex="-1">单独引用​ <a class="header-anchor" href="#单独引用​" aria-label="Permalink to &quot;单独引用​&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { FMessage } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@mixdmatches/fan-ui&#39;</span></span></code></pre></div><p>此时调用方法为 <code>FMessage(options)</code>。 我们也为每个 <code>type</code> 定义了各自的方法，如 <code>FMessage.success(options)</code>。</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="message-props" tabindex="-1">Message Props <a class="header-anchor" href="#message-props" aria-label="Permalink to &quot;Message Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>消息类型</td><td><code>string</code></td><td><code>success | error | warning | info</code></td><td><code>info</code></td></tr><tr><td>message</td><td>消息文字</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td><code>boolean</code></td><td>-</td><td><code>false</code></td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td><code>number</code></td><td>-</td><td><code>3000</code></td></tr><tr><td>plain</td><td>是否为简洁的消息提示</td><td><code>boolean</code></td><td>-</td><td><code>false</code></td></tr></tbody></table>',6))])}}});export{V as __pageData,W as default};
