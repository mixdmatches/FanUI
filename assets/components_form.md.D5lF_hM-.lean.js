import{f as l,r as i,a as f,o as u,e as n,a5 as c,c as r,b as a,an as p,u as t,w as s}from"./chunks/framework.C1Ulg0rN.js";import{g as d}from"./chunks/theme.DGTHpQYW.js";import{O as h,E as g}from"./chunks/index.CturKxrw.js";const b=`<template>
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
`,B=JSON.parse('{"title":"Form组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1747981936000}'),v={name:"components/form.md"},C=Object.assign(v,{setup(_){const o=l(!0);return(k,e)=>{const m=i("ClientOnly");return u(),f("div",null,[e[1]||(e[1]=n("h1",{id:"form组件",tabindex:"-1"},[a("Form组件 "),n("a",{class:"header-anchor",href:"#form组件","aria-label":'Permalink to "Form组件"'},"​")],-1)),e[2]||(e[2]=n("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),c(r(t(h),null,null,512),[[p,o.value]]),r(m,null,{default:s(()=>[r(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:t(b)},{vue:s(()=>[r(d)]),_:1},8,["vueCode"])]),_:1})])}}});export{B as __pageData,C as default};
