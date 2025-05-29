import{f as m,r as c,a as g,o as f,ag as r,I as h,c as i,e as n,au as p,u as t,w as e,b as o}from"./chunks/framework.Ck_omlE8.js";import{g as E,h as y,i as u}from"./chunks/theme.D8C8uZfs.js";import{O as d,E as k}from"./chunks/index.BjrPRfaW.js";const F=`<template>
  <f-form
    :label-position="formAlign"
    label-width="auto"
    style="max-width: 600px"
    :model="user"
  >
    <f-form-item label="Form Align">
      <f-radio-group v-model="formAlign">
        <f-radio value="left">Left</f-radio>
        <f-radio value="right">Right</f-radio>
        <f-radio value="top">Top</f-radio>
      </f-radio-group>
    </f-form-item>
    <f-form-item label="Form Item Align">
      <f-radio-group v-model="formItemAlign">
        <f-radio value="">Empty</f-radio>
        <f-radio value="left">Left</f-radio>
        <f-radio value="right">Right</f-radio>
        <f-radio value="top">Top</f-radio>
      </f-radio-group>
    </f-form-item>
    <f-form-item label="姓名姓名姓名姓名" :label-position="formItemAlign">
      <f-input
        style="width: 200px"
        v-model="user.username"
        placeholder="请输入"
      ></f-input>
    </f-form-item>
    <f-form-item label="密码" :label-position="formItemAlign">
      <f-input
        style="width: 200px"
        v-model="user.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></f-input>
    </f-form-item>
    <f-form-item label="城市" :label-position="formItemAlign">
      <f-checkbox-group v-model="user.city">
        <f-checkbox :value="item" v-for="item in checkGroup" :key="item">
          {{ item }}
        </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item label="按钮" :label-position="formItemAlign">
      <f-button type="primary">提交</f-button>
    </f-form-item>
  </f-form>
</template>

<script setup lang="ts">
import { FormItemProps, FormProps } from '@fan-ui/components/form'
import { ref } from 'vue'
const user = ref({ username: '', password: '', city: ['南京', '苏州'] })
const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
const formAlign = ref<FormProps['labelPosition']>('left')
const formItemAlign = ref<FormItemProps['labelPosition']>('left')
<\/script>
`,b=`<template>
  <f-form :model="user" :inline="true">
    <f-form-item label="姓名">
      <f-input
        style="width: 200px"
        v-model="user.username"
        placeholder="请输入"
      ></f-input>
    </f-form-item>
    <f-form-item label="密码">
      <f-input
        style="width: 200px"
        v-model="user.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></f-input>
    </f-form-item>
    <f-form-item label="城市">
      <f-checkbox-group v-model="user.city">
        <f-checkbox :value="item" v-for="item in checkGroup" :key="item">
          {{ item }}
        </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item>
      <f-button type="primary">提交</f-button>
    </f-form-item>
  </f-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const user = ref({ username: '', password: '', city: ['南京', '苏州'] })

const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
<\/script>
`,A=`<template>
  <f-form
    ref="formRef"
    :model="user"
    :rules="{
      username: {
        min: 6,
        max: 10,
        message: '用户名6-10',
        trigger: ['blur', 'change']
      },
      password: {
        min: 6,
        max: 10,
        message: '密码6-10',
        trigger: ['blur', 'change']
      },
      city: { required: true, message: '至少选择一个城市', trigger: 'change' }
    }"
  >
    <f-form-item
      label="姓名"
      prop="username"
      :rules="[{ required: true, message: '请输入用户名', trigger: 'change' }]"
    >
      <f-input v-model="user.username" placeholder="请输入"></f-input>
    </f-form-item>
    <f-form-item
      label="密码"
      prop="password"
      :rules="[{ required: true, message: '请输入密码', trigger: 'change' }]"
    >
      <f-input
        v-model="user.password"
        placeholder="请输入密码"
        type="password"
        show-password
      ></f-input>
    </f-form-item>
    <f-form-item label="城市" prop="city">
      <f-checkbox-group v-model="user.city">
        <f-checkbox :value="item" v-for="item in checkGroup" :key="item">
          {{ item }}
        </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item label="">
      <f-button type="primary" @click="validate">校验表单</f-button>
    </f-form-item>
  </f-form>
</template>

<script setup lang="ts">
import { FormInstance } from '@fan-ui/components/form'
import { ref } from 'vue'

const user = ref({ username: '', password: '', city: ['南京', '苏州'] })
const formRef = ref<FormInstance>()
const validate = () => {
  formRef.value?.validate((valid, error) => {
    console.log(valid, error)
  })
}

const checkGroup = ref(['武汉', '北京', '天津', '南京', '苏州'])
<\/script>
`,I=JSON.parse('{"title":"Form组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1748534794000}'),v={name:"components/form.md"},P=Object.assign(v,{setup(C){const a=m(!0);return(B,s)=>{const l=c("ClientOnly");return f(),g("div",null,[s[3]||(s[3]=r('<h1 id="form组件" tabindex="-1">Form组件 <a class="header-anchor" href="#form组件" aria-label="Permalink to &quot;Form组件&quot;">​</a></h1><p>表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>最基础的表单包括各种输入表单项，比如<code>input</code>、<code>select</code>、<code>radio</code>、<code>checkbox</code>等。</p><p>在每一个 <code>form</code> 组件中，你需要一个 <code>form-item</code> 字段作为输入项的容器，用于获取值与验证值。</p>',5)),h(i(t(d),null,null,512),[[p,a.value]]),i(l,null,{default:e(()=>[i(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),vueCode:t(A)},{vue:e(()=>[i(E)]),_:1},8,["vueCode"])]),_:1}),s[4]||(s[4]=n("h2",{id:"行内表单",tabindex:"-1"},[o("行内表单 "),n("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),s[5]||(s[5]=n("p",null,[n("code",null,"inline"),o("属性设置为 "),n("code",null,"true"),o(" ，表单会变成行内表单。")],-1)),h(i(t(d),null,null,512),[[p,a.value]]),i(l,null,{default:e(()=>[i(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{a.value=!1}),vueCode:t(b)},{vue:e(()=>[i(y)]),_:1},8,["vueCode"])]),_:1}),s[6]||(s[6]=r('<h2 id="对齐情况" tabindex="-1">对齐情况 <a class="header-anchor" href="#对齐情况" aria-label="Permalink to &quot;对齐情况&quot;">​</a></h2><p>您可以分别设置 <code>f-form-item</code> 的<code>label-position</code>，如果值为空， 则会使用 <code>f-form</code>的<code>label-position</code>。</p><p>通过设置 <code>label-position</code> 属性可以改变表单域标签的位置，可选值为 <code>top</code>、<code>left</code>, 当设为 <code>top</code> 时标签会置于表单域的顶部</p>',3)),h(i(t(d),null,null,512),[[p,a.value]]),i(l,null,{default:e(()=>[i(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{a.value=!1}),vueCode:t(F)},{vue:e(()=>[i(u)]),_:1},8,["vueCode"])]),_:1}),s[7]||(s[7]=r(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>model</td><td><code>Object</code></td><td>必需</td><td>表单数据对象</td></tr><tr><td>rules</td><td><code>Record&lt;string, Arrayable&lt;FormItemRule&gt;&gt;</code></td><td>-</td><td>表单验证规则，<code>FormItemRule</code> 继承自 <code>async-validator</code> 的 <code>RuleItem</code>，并可额外指定 <code>trigger</code> 属性</td></tr><tr><td>inline</td><td><code>Boolean</code></td><td><code>false</code></td><td>是否为行内表单</td></tr><tr><td>labelPosition</td><td><code>&#39;left&#39; | &#39;right&#39; | &#39;top&#39;</code></td><td><code>&#39;right&#39;</code></td><td>表单域标签的位置</td></tr></tbody></table><h3 id="form-event" tabindex="-1">Form Event <a class="header-anchor" href="#form-event" aria-label="Permalink to &quot;Form Event&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>validate</td><td><code>callback?: (valid: boolean, fields?: Value) =&gt; void</code></td><td>对整个表单进行校验，校验完成后会执行回调函数，返回校验结果和错误字段。如果没有提供回调函数，校验失败时会返回一个被拒绝的 Promise</td></tr><tr><td>addField</td><td><code>context: FormItemContext</code></td><td>用于向表单中添加表单项上下文，一般由内部使用</td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>prop</td><td><code>String</code></td><td>-</td><td>表单域的字段名，用于和 <code>form</code> 的 <code>rules</code> 对应</td></tr><tr><td>label</td><td><code>String</code></td><td>-</td><td>表单域标签</td></tr><tr><td>rules</td><td><code>Arrayable&lt;FormItemRule&gt;</code></td><td>-</td><td>表单项的验证规则，<code>FormItemRule</code> 继承自 <code>async-validator</code> 的 <code>RuleItem</code>，并可额外指定 <code>trigger</code> 属性</td></tr><tr><td>showMessage</td><td><code>Boolean</code></td><td><code>true</code></td><td>是否显示验证错误信息</td></tr><tr><td>labelPosition</td><td><code>&#39;left&#39; | &#39;right&#39; | &#39;top&#39;</code></td><td><code>&#39;&#39;</code></td><td>表单域标签的位置，若为空则使用 <code>f-form</code> 的 <code>labelPosition</code></td></tr></tbody></table><h3 id="formitem-event" tabindex="-1">FormItem Event <a class="header-anchor" href="#formitem-event" aria-label="Permalink to &quot;FormItem Event&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>validate</td><td><code>trigger: string, callback?: (isValid: boolean) =&gt; void</code></td><td>对当前表单项进行校验，根据触发时机执行校验规则，返回一个 Promise</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { RuleItem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;async-validator&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ExtractPropTypes, InjectionKey, PropType } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Arrayable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItemRule</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RuleItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Arrayable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> formItemValidateState</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItemValidateState</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formItemValidateState)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> formItemProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prop: String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  label: String,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rules: [Object, Array] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PropType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Arrayable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FormItemRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  showMessage: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: Boolean,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  labelPosition: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: String </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PropType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;top&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItemProps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ExtractPropTypes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> formItemProps&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItemContext</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FormItemProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  validate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">isValid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> formItemContextKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InjectionKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FormItemContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;formItemContextKey&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,11))])}}});export{I as __pageData,P as default};
