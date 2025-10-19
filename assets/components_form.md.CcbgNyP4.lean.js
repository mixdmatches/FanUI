import{g as k,r as f,c,o as u,al as m,p as o,b as s,a as t,S as p,u as i,w as a,e as l}from"./chunks/framework.Br5qlODI.js";import{B as g,C as y,D as b,E,F,G as v}from"./chunks/theme.COWshNnW.js";import{O as d,E as h}from"./chunks/index.CdocGXei.js";const A=`<template>
  <f-form
    ref="formRef"
    style="max-width: 600px"
    :model="dynamicValidateForm"
    label-width="auto"
    class="demo-dynamic"
  >
    <f-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: '请输入邮件地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <f-input v-model="dynamicValidateForm.email" />
    </f-form-item>
    <f-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur'
      }"
    >
      <f-input v-model="domain.value" />
      <f-button class="mt-2" @click.prevent="removeDomain(domain)">
        删除
      </f-button>
    </f-form-item>
    <f-form-item>
      <f-button type="primary" @click="submitForm(formRef)">提交</f-button>
      <f-button @click="addDomain">添加表单项</f-button>
      <f-button @click="resetForm(formRef)">重置</f-button>
    </f-form-item>
  </f-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: ''
    }
  ],
  email: ''
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: ''
  })
}

const submitForm = formEl => {
  if (!formEl) return
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = formEl => {
  if (!formEl) return
  formEl.resetFields()
}
<\/script>
`,x=`<template>
  <f-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
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
`,C=`<template>
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
`,D=`<template>
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
`,B=`<template>
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
`,w=`<template>
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
`,W=JSON.parse('{"title":"Form组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md","lastUpdated":1760875895000}'),P={name:"components/form.md"},R=Object.assign(P,{setup(S){const n=k(!0);return(I,e)=>{const r=f("ClientOnly");return u(),c("div",null,[e[6]||(e[6]=m("",5)),o(s(i(d),null,null,512),[[p,n.value]]),s(r,null,{default:a(()=>[s(i(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:i(w)},{vue:a(()=>[s(g)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=t("h2",{id:"行内表单",tabindex:"-1"},[l("行内表单 "),t("a",{class:"header-anchor",href:"#行内表单","aria-label":'Permalink to "行内表单"'},"​")],-1)),e[8]||(e[8]=t("p",null,[t("code",null,"inline"),l("属性设置为 "),t("code",null,"true"),l(" ，表单会变成行内表单。")],-1)),o(s(i(d),null,null,512),[[p,n.value]]),s(r,null,{default:a(()=>[s(i(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:i(B)},{vue:a(()=>[s(y)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=m("",3)),o(s(i(d),null,null,512),[[p,n.value]]),s(r,null,{default:a(()=>[s(i(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:i(D)},{vue:a(()=>[s(b)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=t("h2",{id:"表单验证",tabindex:"-1"},[l("表单验证 "),t("a",{class:"header-anchor",href:"#表单验证","aria-label":'Permalink to "表单验证"'},"​")],-1)),e[11]||(e[11]=t("p",null,[l("Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 "),t("code",null,"form-Item"),l(" 的 "),t("code",null,"prop"),l(" 属性设置为需要验证的特殊键值即可。 校验规则参见 "),t("a",{href:"https://github.com/yiminghe/async-validator",target:"_blank",rel:"noreferrer"},"async-validator")],-1)),o(s(i(d),null,null,512),[[p,n.value]]),s(r,null,{default:a(()=>[s(i(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{n.value=!1}),vueCode:i(C)},{vue:a(()=>[s(E)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=t("h2",{id:"自定义表单验证",tabindex:"-1"},[l("自定义表单验证 "),t("a",{class:"header-anchor",href:"#自定义表单验证","aria-label":'Permalink to "自定义表单验证"'},"​")],-1)),e[13]||(e[13]=t("p",null,"这个例子中展示了如何使用自定义验证规则来完成密码的二次验证",-1)),o(s(i(d),null,null,512),[[p,n.value]]),s(r,null,{default:a(()=>[s(i(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{n.value=!1}),vueCode:i(x)},{vue:a(()=>[s(F)]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=t("h2",{id:"动态表单",tabindex:"-1"},[l("动态表单 "),t("a",{class:"header-anchor",href:"#动态表单","aria-label":'Permalink to "动态表单"'},"​")],-1)),e[15]||(e[15]=t("p",null,"除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。",-1)),o(s(i(d),null,null,512),[[p,n.value]]),s(r,null,{default:a(()=>[s(i(h),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[5]||(e[5]=()=>{n.value=!1}),vueCode:i(A)},{vue:a(()=>[s(v)]),_:1},8,["vueCode"])]),_:1}),e[16]||(e[16]=m("",11))])}}});export{W as __pageData,R as default};
