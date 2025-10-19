import{g as c,r as u,c as f,o as h,a as t,p as s,b as l,al as v,e as n,S as r,u as a,w as d}from"./chunks/framework.Br5qlODI.js";import{t as b,u as C,v as g,w as k}from"./chunks/theme.COWshNnW.js";import{O as p,E as m}from"./chunks/index.CdocGXei.js";const A=`<template>
  <f-collapse v-model="activeNames">
    <f-collapse-item title="标题1" name="1">
      <div>哈哈哈哈哈哈哈哈哈哈这是标题1de内容捏</div>
    </f-collapse-item>
    <f-collapse-item name="2" :icon="RightC">
      <template #title>
        标题2 <f-icon><Info></Info></f-icon
      ></template>
      <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </f-collapse-item>
    <f-collapse-item name="3">
      <template #title>
        标题3
        <f-icon>
          <Like></Like>
        </f-icon>
      </template>
      <template #icon="{ isActive }">
        {{ isActive ? '收起' : '展开' }}
      </template>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈这是标题3的内容捏
      </div>
    </f-collapse-item>
  </f-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Info, Like, RightC } from '@icon-park/vue-next'
const activeNames = ref(['1'])
<\/script>
`,B=`<template>
  <f-collapse v-model="activeNames">
    <f-collapse-item title="标题1" name="1">
      <div>哈哈哈哈哈哈哈哈哈哈这是标题1de内容捏</div>
    </f-collapse-item>
    <f-collapse-item name="2">
      <template #title>
        标题2 <f-icon><Info></Info></f-icon
      ></template>
      <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </f-collapse-item>
    <f-collapse-item name="3">
      <template #title>
        标题3
        <f-icon>
          <Like></Like>
        </f-icon>
      </template>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈这是标题3的内容捏
      </div>
    </f-collapse-item>
  </f-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Info, Like } from '@icon-park/vue-next'
const activeNames = ref([])
<\/script>
`,D=`<template>
  <f-collapse :accordion="true" v-model="activeNames" @chang="handleChange">
    <f-collapse-item title="标题1" name="1">
      <div>哈哈哈哈哈哈哈哈哈哈这是标题1de内容捏</div>
    </f-collapse-item>
    <f-collapse-item name="2">
      <template #title> 标题2 </template>
      <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </f-collapse-item>
    <f-collapse-item name="3">
      <template #title> 标题3 </template>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈这是标题3的内容捏
      </div>
    </f-collapse-item>
  </f-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log('change', val)
}
<\/script>
`,S=`<template>
  <f-collapse v-model="activeNames">
    <f-collapse-item title="标题1" name="1">
      <div>哈哈哈哈哈哈哈哈哈哈这是标题1de内容捏</div>
    </f-collapse-item>
    <f-collapse-item name="2">
      <template #title> 标题2 </template>
      <div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
    </f-collapse-item>
    <f-collapse-item name="3">
      <template #title> 标题3 </template>
      <div>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈这是标题3的内容捏
      </div>
    </f-collapse-item>
  </f-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeNames = ref(['1'])
<\/script>
`,T=JSON.parse('{"title":"Collapse 折叠面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/collapse.md","filePath":"components/collapse.md","lastUpdated":1760875895000}'),y={name:"components/collapse.md"},N=Object.assign(y,{setup(V){const o=c(!0);return(w,e)=>{const i=u("ClientOnly");return h(),f("div",null,[e[4]||(e[4]=t("h1",{id:"collapse-折叠面板",tabindex:"-1"},[n("Collapse 折叠面板 "),t("a",{class:"header-anchor",href:"#collapse-折叠面板","aria-label":'Permalink to "Collapse 折叠面板"'},"​")],-1)),e[5]||(e[5]=t("p",null,"Collapse 折叠面板是一种常用的内容区域折叠/展开组件，适用于以下场景：",-1)),e[6]||(e[6]=t("ul",null,[t("li",null,"需要分组显示大量内容时"),t("li",null,"需要节省页面空间时"),t("li",null,"需要按分类展示信息时")],-1)),e[7]||(e[7]=t("h2",{id:"基本用法",tabindex:"-1"},[n("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[8]||(e[8]=t("p",null,"可同时展开多个面板，面板之间不影响",-1)),s(l(a(p),null,null,512),[[r,o.value]]),l(i,null,{default:d(()=>[l(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(S)},{vue:d(()=>[l(b)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=t("h2",{id:"手风琴模式",tabindex:"-1"},[n("手风琴模式 "),t("a",{class:"header-anchor",href:"#手风琴模式","aria-label":'Permalink to "手风琴模式"'},"​")],-1)),e[10]||(e[10]=t("p",null,"Collapse 组件还支持手风琴模式，即每次只能展开一个内容区域，其他区域会自动折叠。",-1)),s(l(a(p),null,null,512),[[r,o.value]]),l(i,null,{default:d(()=>[l(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(D)},{vue:d(()=>[l(C)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=t("h2",{id:"自定义面板标题",tabindex:"-1"},[n("自定义面板标题 "),t("a",{class:"header-anchor",href:"#自定义面板标题","aria-label":'Permalink to "自定义面板标题"'},"​")],-1)),e[12]||(e[12]=t("p",null,[n("除了可以通过 "),t("code",null,"title"),n(" 属性以外，还可以通过具名 "),t("code",null,"slot"),n(" 来实现自定义面板的标题内容，以实现增加图标等效果。")],-1)),s(l(a(p),null,null,512),[[r,o.value]]),l(i,null,{default:d(()=>[l(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:a(B)},{vue:d(()=>[l(g)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=t("h2",{id:"自定义图标",tabindex:"-1"},[n("自定义图标 "),t("a",{class:"header-anchor",href:"#自定义图标","aria-label":'Permalink to "自定义图标"'},"​")],-1)),e[14]||(e[14]=t("p",null,[n("可以通过具名 "),t("code",null,"slot"),n(" 来自定义图标或者内容")],-1)),s(l(a(p),null,null,512),[[r,o.value]]),l(i,null,{default:d(()=>[l(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:a(A)},{vue:d(()=>[l(k)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=v("",9))])}}});export{T as __pageData,N as default};
