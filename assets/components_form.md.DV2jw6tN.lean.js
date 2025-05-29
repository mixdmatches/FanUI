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
`,I=JSON.parse('{"title":"Form组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1748534794000}'),v={name:"components/form.md"},P=Object.assign(v,{setup(C){const a=m(!0);return(B,s)=>{const l=c("ClientOnly");return f(),g("div",null,[s[3]||(s[3]=r("",5)),h(i(t(d),null,null,512),[[p,a.value]]),i(l,null,{default:e(()=>[i(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),vueCode:t(A)},{vue:e(()=>[i(E)]),_:1},8,["vueCode"])]),_:1}),s[4]||(s[4]=n("h2",{id:"行内表单",tabindex:"-1"},[o("行内表单 "),n("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),s[5]||(s[5]=n("p",null,[n("code",null,"inline"),o("属性设置为 "),n("code",null,"true"),o(" ，表单会变成行内表单。")],-1)),h(i(t(d),null,null,512),[[p,a.value]]),i(l,null,{default:e(()=>[i(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[1]||(s[1]=()=>{a.value=!1}),vueCode:t(b)},{vue:e(()=>[i(y)]),_:1},8,["vueCode"])]),_:1}),s[6]||(s[6]=r("",3)),h(i(t(d),null,null,512),[[p,a.value]]),i(l,null,{default:e(()=>[i(t(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[2]||(s[2]=()=>{a.value=!1}),vueCode:t(F)},{vue:e(()=>[i(u)]),_:1},8,["vueCode"])]),_:1}),s[7]||(s[7]=r("",11))])}}});export{I as __pageData,P as default};
