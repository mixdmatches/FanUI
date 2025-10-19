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
`,_=JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1760875895000}'),w={name:"components/tooltip.md"},q=Object.assign(w,{setup(V){const a=u(!0);return(B,t)=>{const i=b("ClientOnly");return h(),m("div",null,[t[5]||(t[5]=f('<h1 id="tooltip-文字提示" tabindex="-1">Tooltip 文字提示 <a class="header-anchor" href="#tooltip-文字提示" aria-label="Permalink to &quot;Tooltip 文字提示&quot;">​</a></h1><p>常用于鼠标Hover时的提示信息</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>Tooltip 组件提供 9 种定位组合，支持灵活的提示框展示位置。通过下方示例可直观了解各种定位效果，选择符合您需求的方案。</p><p>提示内容通过 <code>content</code> 属性定义，弹出位置由 <code>placement</code> 属性控制。<code>placement</code> 属性格式为：<code>[方向]-[对齐位置]</code>，其中：</p><ul><li>方向：<code>top、left、right、bottom</code></li><li>对齐位置：<code>start, end</code>，默认为空。</li></ul>',6)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:n(C)},{vue:d(()=>[e(v)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=o("h2",{id:"触发方式",tabindex:"-1"},[l("触发方式 "),o("a",{class:"header-anchor",href:"#触发方式","aria-label":'Permalink to "触发方式"'},"​")],-1)),t[7]||(t[7]=o("p",null,[l("Tooltip 组件提供 2 种触发方式，分别为："),o("code",null,"hover、click"),l("。通过 "),o("code",null,"trigger"),l(" 属性设置触发方式。")],-1)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:n(G)},{vue:d(()=>[e(y)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=f('<h2 id="手动模式" tabindex="-1">手动模式 <a class="header-anchor" href="#手动模式" aria-label="Permalink to &quot;手动模式&quot;">​</a></h2><p>给 <code>tooltip</code> 组件添加 <code>manual</code> 属性，即可开启手动模式。但是要获取 <code>tooltip</code> 实例，实例已导出 <code>close</code> 和 <code>open</code> 方法</p>',2)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:n(T)},{vue:d(()=>[e(S)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=o("h2",{id:"延迟",tabindex:"-1"},[l("延迟 "),o("a",{class:"header-anchor",href:"#延迟","aria-label":'Permalink to "延迟"'},"​")],-1)),t[10]||(t[10]=o("p",null,[l("设置属性 "),o("code",null,"closeDelay"),l(" 和 "),o("code",null,"openDelay"),l(" ，默认值是 "),o("code",null,"200ms")],-1)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{a.value=!1}),vueCode:n(k)},{vue:d(()=>[e(g)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=o("h2",{id:"不要箭头",tabindex:"-1"},[l("不要箭头 "),o("a",{class:"header-anchor",href:"#不要箭头","aria-label":'Permalink to "不要箭头"'},"​")],-1)),t[12]||(t[12]=o("p",null,[l("可根据是否需要箭头设置 "),o("code",null,"no-arrow"),l(" 属性，默认值为 "),o("code",null,"false")],-1)),s(e(n(p),null,null,512),[[r,a.value]]),e(i,null,{default:d(()=>[e(n(c),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{a.value=!1}),vueCode:n(W)},{vue:d(()=>[e(x)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=f('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td><code>string</code></td><td>-</td><td>提示内容</td></tr><tr><td style="text-align:left;">placement</td><td><code>string</code></td><td><code>bottom</code></td><td>弹出位置</td></tr><tr><td style="text-align:left;">trigger</td><td><code>string</code></td><td><code>hover</code></td><td>触发方式</td></tr><tr><td style="text-align:left;">manual</td><td><code>boolean</code></td><td><code>false</code></td><td>手动模式</td></tr><tr><td style="text-align:left;">transition</td><td><code>string</code></td><td><code>fade</code></td><td>过渡动画</td></tr><tr><td style="text-align:left;">popper-options</td><td><code>object</code></td><td><code>{}</code></td><td>popper 配置</td></tr><tr><td style="text-align:left;">close-delay</td><td><code>number</code></td><td><code>200</code></td><td>关闭延迟</td></tr><tr><td style="text-align:left;">open-delay</td><td><code>number</code></td><td><code>200</code></td><td>打开延迟</td></tr><tr><td style="text-align:left;">no-arrow</td><td><code>boolean</code></td><td><code>false</code></td><td>是否展示箭头</td></tr></tbody></table><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>visible-change</td><td>可见状态改变</td><td><code>(visible: boolean) =&gt; void</code></td></tr></tbody></table>',5))])}}});export{_ as __pageData,q as default};
