import{g,r as m,c as f,o as h,al as u,p as d,b as n,a as t,S as c,u as r,w as a,e as s}from"./chunks/framework.Br5qlODI.js";import{a9 as b,aa as v,ab as y,ac as S,ad as x}from"./chunks/theme.COWshNnW.js";import{O as p,E as i}from"./chunks/index.CdocGXei.js";const W=`<template>
  <div class="demo-progress">
    <f-progress :percentage="50">
      <f-button text>Content</f-button>
    </f-progress>
    <f-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </f-progress>
    <f-progress type="circle" :percentage="100" status="success">
      <f-button type="success" :icon="CheckOne" circle />
    </f-progress>
    <f-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </f-progress>
  </div>
</template>

<script lang="ts" setup>
import { CheckOne } from '@icon-park/vue-next'
<\/script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .f-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .f-progress--circle {
  margin-right: 15px;
}
</style>
`,k=`<template>
  <div class="demo-progress">
    <f-progress type="circle" :percentage="0" />
    <f-progress type="circle" :percentage="25" />
    <f-progress type="circle" :percentage="100" status="success" />
    <f-progress type="circle" :percentage="70" status="warning" />
    <f-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>

<style scoped>
.demo-progress .f-progress--circle {
  margin-right: 15px;
}
</style>
`,V=`<template>
  <div class="demo-progress">
    <f-progress :percentage="percentage" :color="customColor" />

    <f-progress :percentage="percentage" :color="customColorMethod" />

    <f-progress :percentage="percentage" :color="customColors" />
    <f-progress :percentage="percentage" :color="customColors" />
    <div>
      <f-button :icon="Minus" @click="decrease" />
      <f-button :icon="Plus" @click="increase" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Minus, Plus } from '@icon-park/vue-next'

const percentage = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
]

const customColorMethod = (percentage: number) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
<\/script>

<style scoped>
.demo-progress .f-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
`,w=`<template>
  <div class="demo-progress">
    <f-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <f-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <f-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <f-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</template>

<style scoped>
.demo-progress .f-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
`,C=`<template>
  <div class="demo-progress">
    <f-progress :percentage="50" />
    <f-progress :percentage="100" :format="format" />
    <f-progress :percentage="100" status="success" />
    <f-progress :percentage="100" status="warning" />
    <f-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage: number) =>
  percentage === 100 ? 'Full' : \`\${percentage}%\`
<\/script>

<style scoped>
.demo-progress .f-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
`,P=JSON.parse('{"title":"Progress 进度条​","description":"","frontmatter":{},"headers":[],"relativePath":"components/progress.md","filePath":"components/progress.md","lastUpdated":1760875895000}'),G={name:"components/progress.md"},Y=Object.assign(G,{setup(T){const o=g(!0);return(A,e)=>{const l=m("ClientOnly");return h(),f("div",null,[e[5]||(e[5]=u("",4)),d(n(r(p),null,null,512),[[c,o.value]]),n(l,null,{default:a(()=>[n(r(i),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:r(C)},{vue:a(()=>[n(b)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"进度条内显示百分比标识​",tabindex:"-1"},[s("进度条内显示百分比标识​ "),t("a",{class:"header-anchor",href:"#进度条内显示百分比标识​","aria-label":'Permalink to "进度条内显示百分比标识​"'},"​")],-1)),e[7]||(e[7]=t("p",null,"百分比不占用额外空间，适用于文件上传等场景。",-1)),e[8]||(e[8]=t("p",null,[t("code",null,"Progress"),s(" 组件可通过 "),t("code",null,"stroke-width"),s(" 属性更改进度条的高度，并可通过 "),t("code",null,"text-inside"),s(" 属性来改变进度条内部的文字。")],-1)),d(n(r(p),null,null,512),[[c,o.value]]),n(l,null,{default:a(()=>[n(r(i),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:r(w)},{vue:a(()=>[n(v)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"自定义进度条的颜色​",tabindex:"-1"},[s("自定义进度条的颜色​ "),t("a",{class:"header-anchor",href:"#自定义进度条的颜色​","aria-label":'Permalink to "自定义进度条的颜色​"'},"​")],-1)),e[10]||(e[10]=t("p",null,[s("可以通过 "),t("code",null,"color"),s(" 属性来设置进度条的颜色。 该属性可以接受十六进制颜色值，函数和数组。")],-1)),d(n(r(p),null,null,512),[[c,o.value]]),n(l,null,{default:a(()=>[n(r(i),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:r(V)},{vue:a(()=>[n(y)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=t("h2",{id:"环状进度条",tabindex:"-1"},[s("环状进度条 "),t("a",{class:"header-anchor",href:"#环状进度条","aria-label":'Permalink to "环状进度条"'},"​")],-1)),e[12]||(e[12]=t("p",null,[t("code",null,"Progress"),s(" 组件设置 "),t("code",null,"type"),s(" 属性为 "),t("code",null,"circle"),s(" 即可显示环状进度条。")],-1)),d(n(r(p),null,null,512),[[c,o.value]]),n(l,null,{default:a(()=>[n(r(i),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:r(k)},{vue:a(()=>[n(S)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=t("h2",{id:"自定义内容",tabindex:"-1"},[s("自定义内容 "),t("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),e[14]||(e[14]=t("p",null,[t("code",null,"Progress"),s(" 组件可以通过 "),t("code",null,"slot"),s(" 来自定义进度条的内容。")],-1)),d(n(r(p),null,null,512),[[c,o.value]]),n(l,null,{default:a(()=>[n(r(i),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{o.value=!1}),vueCode:r(W)},{vue:a(()=>[n(x)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=u("",5))])}}});export{P as __pageData,Y as default};
