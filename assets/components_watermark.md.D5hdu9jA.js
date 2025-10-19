import{g as p,r as m,c,o as b,a as e,p as s,b as d,al as f,e as r,S as i,u as a,w as n}from"./chunks/framework.Br5qlODI.js";import{av as y,aw as v}from"./chunks/theme.COWshNnW.js";import{O as h,E as u}from"./chunks/index.CdocGXei.js";const w=`<script setup lang="ts"><\/script>

<template>
  <f-water-mark :content="['FanUI', 'XFan_Ch']">
    <div class="box"></div>
  </f-water-mark>
</template>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 500px;
}
</style>
`,k=`<template>
  <f-water-mark content="FanUI">
    <div class="box"></div>
  </f-water-mark>
</template>

<style scoped>
.box {
  width: 100%;
  height: 500px;
}
</style>
`,A=JSON.parse('{"title":"WaterMark 水印组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/watermark.md","filePath":"components/watermark.md","lastUpdated":1760875895000}'),S={name:"components/watermark.md"},B=Object.assign(S,{setup(W){const o=p(!0);return(g,t)=>{const l=m("ClientOnly");return b(),c("div",null,[t[2]||(t[2]=e("h1",{id:"watermark-水印组件",tabindex:"-1"},[r("WaterMark 水印组件 "),e("a",{class:"header-anchor",href:"#watermark-水印组件","aria-label":'Permalink to "WaterMark 水印组件"'},"​")],-1)),t[3]||(t[3]=e("p",null,"在页面上添加文本水印信息",-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[5]||(t[5]=e("p",null,"基础用法",-1)),s(d(a(h),null,null,512),[[i,o.value]]),d(l,null,{default:n(()=>[d(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:a(k)},{vue:n(()=>[d(y)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=e("h2",{id:"多行水印文字",tabindex:"-1"},[r("多行水印文字 "),e("a",{class:"header-anchor",href:"#多行水印文字","aria-label":'Permalink to "多行水印文字"'},"​")],-1)),t[7]||(t[7]=e("p",null,[r("设置 "),e("code",null,"content"),r(" 为字符串数组来实现多行文本水印")],-1)),s(d(a(h),null,null,512),[[i,o.value]]),d(l,null,{default:n(()=>[d(a(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{o.value=!1}),vueCode:a(w)},{vue:n(()=>[d(v)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=f('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>水印文字内容</td><td><code>string[] or string</code></td><td>&#39;&#39;</td></tr><tr><td>width</td><td>水印宽度</td><td><code>string</code></td><td>&#39;50px&#39;</td></tr><tr><td>height</td><td>水印高度</td><td><code>string</code></td><td>&#39;50px&#39;</td></tr><tr><td>textRotate</td><td>水印文字旋转角度</td><td><code>number</code></td><td>-22</td></tr><tr><td>containerRotate</td><td>水印容器旋转角度</td><td><code>number</code></td><td>0</td></tr><tr><td>zIndex</td><td>水印容器 z-index</td><td><code>string</code></td><td>&#39;9&#39;</td></tr><tr><td>font</td><td>水印字体样式</td><td><code>object</code></td><td>{}</td></tr><tr><td>gap</td><td>水印间距</td><td><code>[number, number]</code></td><td>[100, 100]</td></tr></tbody></table><p>Font:</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>水印字体颜色</td><td><code>string</code></td><td>&#39;rgba(0,0,0,.15)&#39;</td></tr><tr><td>fontSize</td><td>水印字体大小</td><td><code>number</code></td><td>16</td></tr><tr><td>fontWeight</td><td>水印字体粗细</td><td><code>string or number</code></td><td>&#39;normal&#39;</td></tr><tr><td>fontFamily</td><td>水印字体-family</td><td><code>string</code></td><td>&#39;sans-serif&#39;</td></tr></tbody></table>',5))])}}});export{A as __pageData,B as default};
