import{g as u,r as b,c as m,o as h,al as f,p as s,b as e,a as o,S as r,u as n,w as d,e as l}from"./chunks/framework.Br5qlODI.js";import{ah as v,ai as y,aj as S,ak as g,al as x}from"./chunks/theme.COWshNnW.js";import{O as p,E as c}from"./chunks/index.CdocGXei.js";const W=`<template>
  <f-tooltip content="没有箭头" no-arrow> hover me </f-tooltip>
</template>
`,k=`<template>
  <f-tooltip content="延迟" :close-delay="1000" :open-delay="1000">
    hover me
  </f-tooltip>
</template>
`,T=`<script setup lang="ts">
import { ref } from 'vue'
const tooltipRef = ref()
<\/script>

<template>
  <f-tooltip manual content="hover me" ref="tooltipRef">
    <f-button>手动触发</f-button>
  </f-tooltip>
  <span class="work">
    <f-button @click="tooltipRef.open()">open</f-button>
    <f-button @click="tooltipRef.close()">close</f-button>
  </span>
</template>

<style scoped>
.work {
  margin-left: 10px;
}
</style>
`,G=`<template>
  <div class="box">
    <f-tooltip trigger="click" content="click me">
      <f-button>click me</f-button>
    </f-tooltip>
    <f-tooltip trigger="hover" content="hover me">
      <f-button>hover me</f-button>
    </f-tooltip>
  </div>
</template>

<style lang="scss">
.box {
  display: flex;
  gap: 10px;
}
</style>
`,C=`<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <f-button>top-start</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <f-button>top</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <f-button>top-end</f-button>
      </f-tooltip>
    </div>
    <div class="row">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <f-button>left-start</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <f-button>right-start</f-button>
      </f-tooltip>
    </div>
    <div class="row">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <f-button class="mt-3 mb-3">left</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <f-button>right</f-button>
      </f-tooltip>
    </div>
    <div class="row">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <f-button>left-end</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <f-button>right-end</f-button>
      </f-tooltip>
    </div>
    <div class="row center">
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <f-button>bottom-start</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <f-button>bottom</f-button>
      </f-tooltip>
      <f-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <f-button>bottom-end</f-button>
      </f-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin-top: 10px;
}
</style>
`,_=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1760875895000}'),w={name:"components/tooltip.md"},q=Object.assign(w,{setup(V){const a=u(!0);return(B,t)=>{const i=b("ClientOnly");return h(),m("div",null,[t[5]||(t[5]=f("",6)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:n(C)},{vue:d(()=>[e(v)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=o("h2",{id:"触发方式",tabindex:"-1"},[l("触发方式 "),o("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1)),t[7]||(t[7]=o("p",null,[l("Tooltip 组件提供 2 种触发方式，分别为："),o("code",null,"hover、click"),l("。通过 "),o("code",null,"trigger"),l(" 属性设置触发方式。")],-1)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:n(G)},{vue:d(()=>[e(y)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=f("",2)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:n(T)},{vue:d(()=>[e(S)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=o("h2",{id:"延迟",tabindex:"-1"},[l("延迟 "),o("a",{class:"header-anchor",href:"#延迟","aria-label":'Permalink to "延迟"'},"​")],-1)),t[10]||(t[10]=o("p",null,[l("设置属性 "),o("code",null,"closeDelay"),l(" 和 "),o("code",null,"openDelay"),l(" ，默认值是 "),o("code",null,"200ms")],-1)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{a.value=!1}),vueCode:n(k)},{vue:d(()=>[e(g)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=o("h2",{id:"不要箭头",tabindex:"-1"},[l("不要箭头 "),o("a",{class:"header-anchor",href:"#不要箭头","aria-label":'Permalink to "不要箭头"'},"​")],-1)),t[12]||(t[12]=o("p",null,[l("可根据是否需要箭头设置 "),o("code",null,"no-arrow"),l(" 属性，默认值为 "),o("code",null,"false")],-1)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{a.value=!1}),vueCode:n(W)},{vue:d(()=>[e(x)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=f("",5))])}}});export{_ as __pageData,q as default};
