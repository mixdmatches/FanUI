import{g as m,r as c,a as f,o as u,ah as k,J as r,c as s,f as n,av as o,u as i,w as a,b as p}from"./chunks/framework.DgEbPz_E.js";import{l as g,m as y,n as E,o as b,p as F}from"./chunks/theme.CJiqPplO.js";import{O as h,E as d}from"./chunks/index.C9Jnh23N.js";const v=`<template>
  <f-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <f-form-item label="Password" prop="pass">
      <f-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </f-form-item>
    <f-form-item label="Confirm" prop="checkPass">
      <f-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </f-form-item>
    <f-form-item label="Age" prop="age">
      <f-input v-model.number="ruleForm.age" />
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </f-button>
      <f-button @click="resetForm(ruleFormRef)">Reset</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from '@fan-ui/components/form/index'
import type { FormRules } from '@fan-ui/components/form/src/form'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: ''
})

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
<\/script>
`,A=`<template>
  <f-form ref="formRef" :model="form" style="max-width: 600px" :rules="rules">
    <f-form-item label="姓名" prop="name">
      <f-input v-model="form.name" />
    </f-form-item>
    <f-form-item label="兴趣" prop="like">
      <f-checkbox-group v-model="form.like">
        <f-checkbox value="吃饭" name="type"> 吃饭 </f-checkbox>
        <f-checkbox value="睡觉" name="type"> 睡觉 </f-checkbox>
        <f-checkbox value="打游戏" name="type"> 打游戏 </f-checkbox>
        <f-checkbox value="小说" name="type"> 小说 </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <!-- <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item> -->
    <f-form-item label="电话号码" prop="telephone">
      <f-input v-model="form.telephone" />
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="onSubmit">验证</f-button>
      <f-button @click="onReset">重置验证</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormRules } from '@fan-ui/components/form/src/form'

const formRef = ref()
const form = reactive({
  name: '',
  like: [],
  telephone: ''
})

const onSubmit = () => {
  formRef.value.validate()
}

const onReset = () => {
  formRef.value.resetFields()
}

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '姓名不能为空', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-5', trigger: 'blur' }
  ],
  like: [
    {
      type: 'array',
      required: true,
      message: '至少选择一项',
      trigger: 'change'
    }
  ],
  telephone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }]
})
<\/script>
`,x=`<template>
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
`,C=`<template>
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
`,B=`<template>
  <f-form :model="form" style="max-width: 600px">
    <f-form-item label="姓名">
      <f-input v-model="form.name" />
    </f-form-item>
    <f-form-item label="兴趣">
      <f-checkbox-group v-model="form.like">
        <f-checkbox value="吃饭" name="type"> 吃饭 </f-checkbox>
        <f-checkbox value="睡觉" name="type"> 睡觉 </f-checkbox>
        <f-checkbox value="打游戏" name="type"> 打游戏 </f-checkbox>
        <f-checkbox value="小说" name="type"> 小说 </f-checkbox>
      </f-checkbox-group>
    </f-form-item>
    <f-form-item label="性别">
      <f-radio value="男" v-model="form.sex">男</f-radio>
      <f-radio value="女" v-model="form.sex">女</f-radio>
    </f-form-item>
    <f-form-item label="电话号码">
      <f-input v-model="form.telephone" />
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="onSubmit">提交</f-button>
      <f-button>取消</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  like: [],
  sex: '',
  telephone: ''
})

const onSubmit = () => {
  console.log('submit!')
}
<\/script>
`,T=JSON.parse('{"title":"Form组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1749023909000}'),D={name:"components/form.md"},V=Object.assign(D,{setup(P){const t=m(!0);return(w,e)=>{const l=c("ClientOnly");return u(),f("div",null,[e[5]||(e[5]=k("",5)),r(s(i(h),null,null,512),[[o,t.value]]),s(l,null,{default:a(()=>[s(i(d),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:i(B)},{vue:a(()=>[s(g)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=n("h2",{id:"行内表单",tabindex:"-1"},[p("行内表单 "),n("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),e[7]||(e[7]=n("p",null,[n("code",null,"inline"),p("属性设置为 "),n("code",null,"true"),p(" ，表单会变成行内表单。")],-1)),r(s(i(h),null,null,512),[[o,t.value]]),s(l,null,{default:a(()=>[s(i(d),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{t.value=!1}),vueCode:i(C)},{vue:a(()=>[s(y)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=k("",3)),r(s(i(h),null,null,512),[[o,t.value]]),s(l,null,{default:a(()=>[s(i(d),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{t.value=!1}),vueCode:i(x)},{vue:a(()=>[s(E)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=n("h2",{id:"表单验证",tabindex:"-1"},[p("表单验证 "),n("a",{class:"header-anchor",href:"#表单验证","aria-label":'Permalink to "表单验证"'},"​")],-1)),r(s(i(h),null,null,512),[[o,t.value]]),s(l,null,{default:a(()=>[s(i(d),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{t.value=!1}),vueCode:i(A)},{vue:a(()=>[s(b)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=n("h2",{id:"自定义表单验证",tabindex:"-1"},[p("自定义表单验证 "),n("a",{class:"header-anchor",href:"#自定义表单验证","aria-label":'Permalink to "自定义表单验证"'},"​")],-1)),r(s(i(h),null,null,512),[[o,t.value]]),s(l,null,{default:a(()=>[s(i(d),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{t.value=!1}),vueCode:i(v)},{vue:a(()=>[s(F)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=k("",11))])}}});export{T as __pageData,V as default};
