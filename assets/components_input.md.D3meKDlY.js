import{g as c,r as m,c as f,o as h,a as e,p as s,b as d,al as b,e as l,S as i,u as n,w as o}from"./chunks/framework.Br5qlODI.js";import{P as v,Q as x,S as w,U as S,V as D,W as y,X as B}from"./chunks/theme.COWshNnW.js";import{O as u,E as p}from"./chunks/index.CdocGXei.js";const g=`<template>
  <div class="flex gap-4 align-center">
    <f-input v-model="input1" size="large" placeholder="请输入"></f-input>
    <f-input
      v-model="input1"
      placeholder="请输入"
      :prefix-icon="Search"
    ></f-input>
    <f-input v-model="input1" size="small" placeholder="请输入"></f-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@icon-park/vue-next'
const input1 = ref('')
<\/script>
`,A=`<template>
  <div class="mb-10">
    <f-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Pleace input"
    >
      <template #prepend>Http://</template>
    </f-input>
  </div>
  <div class="mb-10">
    <f-input
      v-model="input2"
      style="max-width: 600px"
      placeholder="Pleace input"
    >
      <template #append>.com</template>
    </f-input>
  </div>
  <div class="mb-10">
    <f-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Pleace input"
    >
      <template #prepend>
        <f-button :icon="Search"></f-button>
      </template>
    </f-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
<\/script>
`,C=`<template>
  <div class="flex gap-4 mb-10 align-center">
    <span>使用属性</span>
    <f-input
      v-model="input1"
      style="width: 240px"
      placeholder="选择日期"
      :suffix-icon="Calendar"
    ></f-input>
    <f-input
      v-model="input2"
      style="width: 240px"
      placeholder="选择日期"
      :prefix-icon="Calendar"
    ></f-input>
  </div>
  <div class="flex gap-4 mb-10">
    <span>使用插槽</span>
    <f-input v-model="input3" style="width: 240px" placeholder="搜索">
      <template #suffix>
        <Search></Search>
      </template>
    </f-input>
    <f-input v-model="input4" style="width: 240px" placeholder="搜索">
      <template #prefix>
        <Search></Search>
      </template>
    </f-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@icon-park/vue-next'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
<\/script>
`,W=`<template>
  <f-input
    v-model="password"
    style="width: 240px"
    placeholder="Please input"
    show-password
  ></f-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
<\/script>
`,k=`<template>
  <f-input
    v-model="username"
    style="width: 240px"
    placeholder="Please input"
    clearable
  ></f-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')
<\/script>
`,V=`<template>
  <f-input
    v-model="username"
    style="width: 240px"
    placeholder="Please input"
    disabled
  ></f-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')
<\/script>
`,T=`<template>
  <f-input
    v-model="username"
    style="width: 240px"
    placeholder="Please input"
  ></f-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')
<\/script>
`,I=JSON.parse('{"title":"Input 输入框组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/input.md","filePath":"components/input.md","lastUpdated":1760875895000}'),G={name:"components/input.md"},Z=Object.assign(G,{setup(P){const a=c(!0);return(Y,t)=>{const r=m("ClientOnly");return h(),f("div",null,[t[7]||(t[7]=e("h1",{id:"input-输入框组件",tabindex:"-1"},[l("Input 输入框组件 "),e("a",{class:"header-anchor",href:"#input-输入框组件","aria-label":'Permalink to "Input 输入框组件"'},"​")],-1)),t[8]||(t[8]=e("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:n(T)},{vue:o(()=>[d(v)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),e("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),t[10]||(t[10]=e("p",null,[l("通过 "),e("code",null,"disabled"),l(" 属性指定是否禁用 input 组件")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:n(V)},{vue:o(()=>[d(x)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=e("h2",{id:"一键清空​",tabindex:"-1"},[l("一键清空​ "),e("a",{class:"header-anchor",href:"#一键清空​","aria-label":'Permalink to "一键清空​"'},"​")],-1)),t[12]||(t[12]=e("p",null,[l("使用 "),e("code",null,"clearable"),l(" 属性即可得到一个可一键清空的输入框")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:n(k)},{vue:o(()=>[d(w)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=e("h2",{id:"密码框",tabindex:"-1"},[l("密码框 "),e("a",{class:"header-anchor",href:"#密码框","aria-label":'Permalink to "密码框"'},"​")],-1)),t[14]||(t[14]=e("p",null,[l("使用 "),e("code",null,"show-password"),l(" 属性即可得到一个可切换显示隐藏的密码框")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{a.value=!1}),vueCode:n(W)},{vue:o(()=>[d(S)]),_:1},8,["vueCode"])]),_:1}),t[15]||(t[15]=e("h2",{id:"带图标的输入框",tabindex:"-1"},[l("带图标的输入框 "),e("a",{class:"header-anchor",href:"#带图标的输入框","aria-label":'Permalink to "带图标的输入框"'},"​")],-1)),t[16]||(t[16]=e("p",null,[l("要在输入框中添加图标，你可以简单地使用 "),e("code",null,"prefix-icon"),l(" 和 "),e("code",null,"suffix-icon"),l(" 属性。 另外， "),e("code",null,"prefix"),l(" 和 "),e("code",null,"suffix"),l(" 命名的插槽也能正常工作。")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{a.value=!1}),vueCode:n(C)},{vue:o(()=>[d(D)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=e("h2",{id:"复合型输入框",tabindex:"-1"},[l("复合型输入框 "),e("a",{class:"header-anchor",href:"#复合型输入框","aria-label":'Permalink to "复合型输入框"'},"​")],-1)),t[18]||(t[18]=e("p",null,"可以在输入框中前置或后置一个元素，通常是标签或按钮。",-1)),t[19]||(t[19]=e("p",null,[l("可通过 "),e("code",null,"slot"),l(" 来指定在 Input 中分发的前置或者后置的内容。")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{a.value=!1}),vueCode:n(A)},{vue:o(()=>[d(y)]),_:1},8,["vueCode"])]),_:1}),t[20]||(t[20]=e("h2",{id:"尺寸",tabindex:"-1"},[l("尺寸 "),e("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),t[21]||(t[21]=e("p",null,[l("使用 "),e("code",null,"size"),l(" 属性改变输入框大小。 除了默认大小外，还有另外两个选项： "),e("code",null,"large"),l(", "),e("code",null,"small"),l("。")],-1)),s(d(n(u),null,null,512),[[i,a.value]]),d(r,null,{default:o(()=>[d(n(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[6]||(t[6]=()=>{a.value=!1}),vueCode:n(g)},{vue:o(()=>[d(B)]),_:1},8,["vueCode"])]),_:1}),t[22]||(t[22]=b('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td><code>string</code></td><td><code>text</code></td><td>输入框类型，如 <code>text</code>, <code>password</code> 等</td></tr><tr><td>size</td><td><code>&#39;&#39; | default | small | large</code></td><td>-</td><td>输入框尺寸</td></tr><tr><td>modelValue</td><td><code>string | number</code></td><td><code>&#39;&#39;</code></td><td>输入框绑定的值</td></tr><tr><td>placeholder</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>输入框占位文本</td></tr><tr><td>clearable</td><td><code>boolean</code></td><td><code>false</code></td><td>是否可清空</td></tr><tr><td>showPassword</td><td><code>boolean</code></td><td><code>false</code></td><td>是否显示密码切换按钮</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用输入框</td></tr><tr><td>autofocus</td><td><code>boolean</code></td><td><code>false</code></td><td>是否自动聚焦</td></tr><tr><td>readonly</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为只读状态</td></tr><tr><td>label</td><td><code>string</code></td><td>-</td><td>输入框标签</td></tr><tr><td>prefixIcon</td><td><code>string | Component</code></td><td>-</td><td>输入框头部图标</td></tr><tr><td>suffixIcon</td><td><code>string | Component</code></td><td>-</td><td>输入框尾部图标</td></tr><tr><td>inputStyle</td><td><code>CSSStyleDeclaration</code></td><td><code>{}</code></td><td>输入框的样式</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>blur</td><td>输入框失去焦点时触发</td><td><code>FocusEvent</code> 事件对象</td></tr><tr><td>focus</td><td>输入框获得焦点时触发</td><td><code>FocusEvent</code> 事件对象</td></tr><tr><td>change</td><td>输入框值发生变化且失去焦点时触发</td><td>输入框当前的值，类型为 <code>string</code></td></tr><tr><td>input</td><td>输入框输入时触发</td><td>输入框当前的值，类型为 <code>string</code></td></tr><tr><td>clear</td><td>点击清空按钮时触发</td><td>-</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>输入框默认内容</td></tr><tr><td>prepend</td><td>输入框前置内容，通常用于复合型输入框</td></tr><tr><td>append</td><td>输入框后置内容，通常用于复合型输入框</td></tr><tr><td>prefix</td><td>输入框头部内容，可与 <code>prefix-icon</code> 配合使用</td></tr><tr><td>suffix</td><td>输入框尾部内容，可与 <code>suffix-icon</code> 配合使用</td></tr></tbody></table>',7))])}}});export{I as __pageData,Z as default};
