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
`,W=JSON.parse('{"title":"Radio 单选框​","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio.md","filePath":"components/radio.md","lastUpdated":1760875895000}'),B={name:"components/radio.md"},x=Object.assign(B,{setup(C){const o=p(!0);return(D,e)=>{const l=f("ClientOnly");return b(),m("div",null,[e[3]||(e[3]=n('<h1 id="radio-单选框​" tabindex="-1">Radio 单选框​ <a class="header-anchor" href="#radio-单选框​" aria-label="Permalink to &quot;Radio 单选框​&quot;">​</a></h1><p>在一组备选项中进行单选</p><h2 id="基础用法​" tabindex="-1">基础用法​ <a class="header-anchor" href="#基础用法​" aria-label="Permalink to &quot;基础用法​&quot;">​</a></h2><p>单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</p><p>要使用 <code>Radio</code> 组件，只需要设置<code>v-model</code>绑定变量， 选中意味着变量的值为相应 <code>Radio value</code>属性的值， <code>value</code>可以是<code>String</code>、<code>Number</code> 或 <code>Boolean</code>。</p>',5)),s(t(d(c),null,null,512),[[u,o.value]]),t(l,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:d(T)},{vue:r(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"禁用状态​",tabindex:"-1"},[i("禁用状态​ "),a("a",{class:"header-anchor",href:"#禁用状态​","aria-label":'Permalink to "禁用状态​"'},"​")],-1)),e[5]||(e[5]=a("p",null,[a("code",null,"disabled"),i(" 属性可以用来控制单选框的禁用状态。")],-1)),e[6]||(e[6]=a("p",null,[i("你只需要为单选框设置 "),a("code",null,"disabled"),i(" 属性就能控制其禁用状态")],-1)),s(t(d(c),null,null,512),[[u,o.value]]),t(l,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:d(S)},{vue:r(()=>[t(_)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=n('<h2 id="单选框组​" tabindex="-1">单选框组​ <a class="header-anchor" href="#单选框组​" aria-label="Permalink to &quot;单选框组​&quot;">​</a></h2><p>适用于在多个互斥的选项中选择的场景</p><p>结合<code>f-radio-group</code>元素和子元素<code>f-radio</code>可以实现单选组， 为 <code>f-radio-group</code> 绑定 <code>v-model</code>，再为 每一个 <code>f-radio</code> 设置好 <code>label</code> 属性即可， 另外，还可以通过 <code>change</code> 事件来响应变化，它会传入一个参数 <code>value</code> 来表示改变之后的值。</p>',3)),s(t(d(c),null,null,512),[[u,o.value]]),t(l,null,{default:r(()=>[t(d(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:d(A)},{vue:r(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=n('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="fradio-attributes" tabindex="-1">FRadio Attributes <a class="header-anchor" href="#fradio-attributes" aria-label="Permalink to &quot;FRadio Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>modelValue</td><td><code>string | number | boolean</code></td><td>-</td><td>选中绑定的值</td></tr><tr><td>value</td><td><code>string | number | boolean</code></td><td>-</td><td>单选框的值</td></tr><tr><td>label</td><td><code>string | number | boolean</code></td><td>-</td><td>当 <code>value</code> 没有值时使用 <code>label</code></td></tr><tr><td>name</td><td><code>string</code></td><td>-</td><td>原生 <code>name</code> 值</td></tr><tr><td>size</td><td><code>string</code></td><td>-</td><td>大小，取值范围为 <code>componentSizes</code></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr></tbody></table><h3 id="fradio-events" tabindex="-1">FRadio Events <a class="header-anchor" href="#fradio-events" aria-label="Permalink to &quot;FRadio Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td><code>(val: string | number | boolean | undefined)</code></td><td>选中时触发</td></tr></tbody></table><h3 id="fradiogroup-attributes" tabindex="-1">FRadioGroup Attributes <a class="header-anchor" href="#fradiogroup-attributes" aria-label="Permalink to &quot;FRadioGroup Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td><code>string</code></td><td>-</td><td>原生 <code>id</code> 属性</td></tr><tr><td>modelValue</td><td><code>string | number | boolean</code></td><td><code>undefined</code></td><td>绑定的值</td></tr><tr><td>name</td><td><code>string</code></td><td>-</td><td>原生 <code>name</code> 属性</td></tr><tr><td>size</td><td><code>string</code></td><td>-</td><td>大小，取值范围为 <code>componentSizes</code></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>是否禁用</td></tr></tbody></table><h3 id="fradiogroup-events" tabindex="-1">FRadioGroup Events <a class="header-anchor" href="#fradiogroup-events" aria-label="Permalink to &quot;FRadioGroup Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td><code>(val: string | number | boolean | undefined)</code></td><td>选中时触发</td></tr></tbody></table>',9))])}}});export{W as __pageData,x as default};
