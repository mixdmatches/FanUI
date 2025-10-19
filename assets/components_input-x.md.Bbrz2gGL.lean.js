import{g as p,r as m,c as h,o as f,a,p as s,b as t,al as b,e as d,S as r,u as n,w as o}from"./chunks/framework.Br5qlODI.js";import{L as v,M as g,N as x,O as w}from"./chunks/theme.COWshNnW.js";import{O as u,E as c}from"./chunks/index.CdocGXei.js";const S=`<script setup lang="ts">
import { ref, watch } from 'vue'
import { Link } from '@icon-park/vue-next'
const value = ref('')
watch(
  () => value.value,
  newVal => {
    console.log(newVal)
  }
)

const loading = ref(false)
const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 5000)
  console.log('发送成功')
}
const handleCancel = () => {
  loading.value = false
  console.log('取消发送')
}
<\/script>

<template>
  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="value"
    :loading="loading"
    :max-length="2000"
    @on-submit="handleSubmit"
    @on-cancel="handleCancel"
  >
    <template #extra>
      <div class="work">
        <f-button circle :icon="Link"></f-button>
      </div>
    </template>
  </f-input-x>
</template>
`,k=`<script setup lang="ts">
import { ref, watch } from 'vue'
import { Link, ApiApp } from '@icon-park/vue-next'
const inputValue = ref('')
watch(
  () => inputValue.value,
  newVal => {
    console.log(newVal)
  }
)

const loading = ref(false)
const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 5000)
}

const semi = ref(false)
<\/script>

<template>
  <f-input-x
    style="margin-bottom: 12px"
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="inputValue"
    :loading="loading"
    simple
    :max-length="2000"
    @on-submit="handleSubmit"
  >
    <template #extra>
      <div class="work">
        <f-button circle :icon="Link"></f-button>
      </div>
    </template>
  </f-input-x>

  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="inputValue"
    :loading="loading"
    @on-submit="handleSubmit"
  >
    <template #extra>
      <div class="work">
        <f-button circle :icon="Link"></f-button>
        <span
          class="semi"
          :class="{ 'semi-active': semi }"
          @click="semi = !semi"
        >
          <f-icon size="16" :color="semi ? '#409eff' : '#abb2bd'">
            <api-app theme="outline" :strokeWidth="3" />
          </f-icon>
          深度思考
        </span>
      </div>
    </template>
  </f-input-x>
</template>

<style scoped lang="scss">
.work {
  display: flex;
  align-items: center;
  gap: 6px;
}
.semi {
  box-sizing: border-box;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
}
.semi-active {
  background-color: #e6f7ff;
  border-color: #409eff;
  color: #409eff;
}
</style>
`,V=`<script setup lang="ts">
import { ref, watch } from 'vue'
const value = ref('')
watch(
  () => value.value,
  newVal => {
    console.log(newVal)
  }
)

const loading = ref(false)
const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 5000)
}
<\/script>

<template>
  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="value"
    :loading="loading"
    :simple="true"
    @on-submit="handleSubmit"
  ></f-input-x>
</template>
`,A=`<script setup lang="ts">
import { ref, watch } from 'vue'
const value = ref('')
watch(
  () => value.value,
  newVal => {
    console.log(newVal)
  }
)

const loading = ref(false)
const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 5000)
}
<\/script>

<template>
  <f-input-x
    placeholder="请输入您的问题，并按Enter发送，按Shift+Enter换行"
    v-model="value"
    :loading="loading"
    @on-submit="handleSubmit"
  ></f-input-x>
</template>
`,_=JSON.parse('{"title":"InputX AI对话输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input-x.md","filePath":"components/input-x.md","lastUpdated":1760875895000}'),W={name:"components/input-x.md"},G=Object.assign(W,{setup(B){const l=p(!0);return(D,e)=>{const i=m("ClientOnly");return f(),h("div",null,[e[4]||(e[4]=a("h1",{id:"inputx-ai对话输入框",tabindex:"-1"},[d("InputX AI对话输入框 "),a("a",{class:"header-anchor",href:"#inputx-ai对话输入框","aria-label":'Permalink to "InputX AI对话输入框"'},"​")],-1)),e[5]||(e[5]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s(t(n(u),null,null,512),[[r,l.value]]),t(i,null,{default:o(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:n(A)},{vue:o(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=a("h2",{id:"simple模式",tabindex:"-1"},[d("simple模式 "),a("a",{class:"header-anchor",href:"#simple模式","aria-label":'Permalink to "simple模式"'},"​")],-1)),s(t(n(u),null,null,512),[[r,l.value]]),t(i,null,{default:o(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:n(V)},{vue:o(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=a("h2",{id:"自定义插槽",tabindex:"-1"},[d("自定义插槽 "),a("a",{class:"header-anchor",href:"#自定义插槽","aria-label":'Permalink to "自定义插槽"'},"​")],-1)),s(t(n(u),null,null,512),[[r,l.value]]),t(i,null,{default:o(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{l.value=!1}),vueCode:n(k)},{vue:o(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=a("h2",{id:"限制字数",tabindex:"-1"},[d("限制字数 "),a("a",{class:"header-anchor",href:"#限制字数","aria-label":'Permalink to "限制字数"'},"​")],-1)),s(t(n(u),null,null,512),[[r,l.value]]),t(i,null,{default:o(()=>[t(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{l.value=!1}),vueCode:n(S)},{vue:o(()=>[t(w)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=b("",5))])}}});export{_ as __pageData,G as default};
