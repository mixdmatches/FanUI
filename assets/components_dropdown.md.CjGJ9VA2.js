import{g as f,r as w,c as h,o as c,al as u,p,b as t,a as o,S as i,u as d,w as l,e as n}from"./chunks/framework.Br5qlODI.js";import{x as b,y as v,z as S,A as G}from"./chunks/theme.COWshNnW.js";import{O as m,E as s}from"./chunks/index.CdocGXei.js";const W=`<script setup lang="ts"><\/script>

<template>
  <f-dropdown no-arrow>
    <f-button>无箭头下拉菜单</f-button>
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> 这是第一项 </f-dropdown-item>
        <f-dropdown-item> 这是第二项 </f-dropdown-item>
        <f-dropdown-item> 这是第三项 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
  <f-dropdown style="margin-left: 10px" no-arrow show-shadow>
    <f-button>有阴影下拉菜单</f-button>
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> 这是第一项 </f-dropdown-item>
        <f-dropdown-item> 这是第二项 </f-dropdown-item>
        <f-dropdown-item> 这是第三项 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
</template>

<style scoped></style>
`,y=`<template>
  <div class="box">
    <f-dropdown placement="top-start">
      <f-button>topStart</f-button>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item> 这是第一项 </f-dropdown-item>
          <f-dropdown-item> 这是第二项 </f-dropdown-item>
          <f-dropdown-item> 这是第三项 </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
    <f-dropdown placement="top">
      <f-button>top</f-button>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item> 这是第一项 </f-dropdown-item>
          <f-dropdown-item> 这是第二项 </f-dropdown-item>
          <f-dropdown-item> 这是第三项 </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
    <f-dropdown placement="top-end">
      <f-button>topEnd</f-button>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item> 这是第一项 </f-dropdown-item>
          <f-dropdown-item> 这是第二项 </f-dropdown-item>
          <f-dropdown-item> 这是第三项 </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  gap: 10px;
}
</style>
`,k=`<template>
  <f-dropdown trigger="click" :hide-after-click="false">
    click me
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> item1 </f-dropdown-item>
        <f-dropdown-item disabled> item2 </f-dropdown-item>
        <f-dropdown-item divider> item3 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
</template>
`,V=`<template>
  <f-dropdown>
    hover me
    <template #dropdown>
      <f-dropdown-menu>
        <f-dropdown-item> item1 </f-dropdown-item>
        <f-dropdown-item disabled> item2 </f-dropdown-item>
        <f-dropdown-item divider> item3 </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
</template>
`,g=JSON.parse('{"title":"dropdown 下拉菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/dropdown.md","filePath":"components/dropdown.md","lastUpdated":1760875895000}'),A={name:"components/dropdown.md"},x=Object.assign(A,{setup(B){const a=f(!0);return(T,e)=>{const r=w("ClientOnly");return c(),h("div",null,[e[4]||(e[4]=u('<h1 id="dropdown-下拉菜单" tabindex="-1">dropdown 下拉菜单 <a class="header-anchor" href="#dropdown-下拉菜单" aria-label="Permalink to &quot;dropdown 下拉菜单&quot;">​</a></h1><p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>悬停在下拉菜单上以展开更多操作。</p><p>通过组件 <code>slot</code> 来设置下拉触发的元素以及需要通过具名 <code>slot</code> 为 <code>dropdown</code> 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。</p>',5)),p(t(d(m),null,null,512),[[i,a.value]]),t(r,null,{default:l(()=>[t(d(s),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:d(V)},{vue:l(()=>[t(b)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=o("h2",{id:"菜单隐藏",tabindex:"-1"},[n("菜单隐藏 "),o("a",{class:"header-anchor",href:"#菜单隐藏","aria-label":'Permalink to "菜单隐藏"'},"​")],-1)),e[6]||(e[6]=o("p",null,[n("可以是设置触发方式为 "),o("code",null,"click"),n(" 点击触发, 如果不想点击后隐藏菜单，可以设置 "),o("code",null,"hide-after-click"),n(" 为 "),o("code",null,"false")],-1)),p(t(d(m),null,null,512),[[i,a.value]]),t(r,null,{default:l(()=>[t(d(s),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:d(k)},{vue:l(()=>[t(v)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=o("h2",{id:"位置",tabindex:"-1"},[n("位置 "),o("a",{class:"header-anchor",href:"#位置","aria-label":'Permalink to "位置"'},"​")],-1)),e[8]||(e[8]=o("p",null,[n("设置 "),o("code",null,"placement"),n(" 可以改变下拉菜单的位置,可选值参考 "),o("a",{href:"http://mixdmatches.github.io/FanUI/components/tooltip.html",target:"_blank",rel:"noreferrer"},"f-tooltip")],-1)),p(t(d(m),null,null,512),[[i,a.value]]),t(r,null,{default:l(()=>[t(d(s),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:d(y)},{vue:l(()=>[t(S)]),_:1},8,["vueCode"])]),_:1}),e[9]||(e[9]=o("h2",{id:"隐藏箭头",tabindex:"-1"},[n("隐藏箭头 "),o("a",{class:"header-anchor",href:"#隐藏箭头","aria-label":'Permalink to "隐藏箭头"'},"​")],-1)),e[10]||(e[10]=o("p",null,[n("设置 "),o("code",null,"no-arrow"),n(" 来隐藏箭头，隐藏箭头时可通过设置 "),o("code",null,"show-shadow"),n(" 来显示阴影")],-1)),p(t(d(m),null,null,512),[[i,a.value]]),t(r,null,{default:l(()=>[t(d(s),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:d(W)},{vue:l(()=>[t(G)]),_:1},8,["vueCode"])]),_:1}),e[11]||(e[11]=u('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>hideAfterClick</td><td><code>boolean</code></td><td><code>true</code></td><td>是否点击后隐藏菜单</td></tr><tr><td>showShadow</td><td><code>boolean</code></td><td><code>false</code></td><td>是否显示阴影</td></tr></tbody></table><p>其他属性参考 <a href="http://mixdmatches.github.io/FanUI/components/tooltip.html" target="_blank" rel="noreferrer">f-tooltip</a> 组件</p><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h3><p>事件参考 <a href="http://mixdmatches.github.io/FanUI/components/tooltip.html" target="_blank" rel="noreferrer">f-tooltip</a> 组件</p>',6))])}}});export{g as __pageData,x as default};
