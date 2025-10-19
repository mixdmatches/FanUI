import{g as s,r as u,c as k,o as f,a as t,p as i,b as o,al as m,e as l,S as h,u as d,w as n}from"./chunks/framework.Br5qlODI.js";import{n as p,o as x,p as v,q as g,r as y,s as C}from"./chunks/theme.COWshNnW.js";import{O as r,E as b}from"./chunks/index.CdocGXei.js";const A=`<template>
  <div class="mb-10">
    <f-checkbox v-model="checked1" label="Option1" size="large" border />
    <f-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mb-10">
    <f-checkbox v-model="checked3" label="Option1" border />
    <f-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mb-10">
    <f-checkbox-group v-model="checkboxGroup1" size="small">
      <f-checkbox label="Option1" value="Value1" border />
      <f-checkbox label="Option2" value="Value2" border />
    </f-checkbox-group>
  </div>
  <div class="mb-10">
    <f-checkbox-group v-model="checkboxGroup1" size="small">
      <f-checkbox label="Option1" value="Value1" border disabled />
      <f-checkbox label="Option2" value="Value2" border disabled />
    </f-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Value1'])
<\/script>
`,B=`<template>
  <div>
    <f-checkbox-group v-model="checkboxGroup1" size="large">
      <f-checkbox-button v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </f-checkbox-button>
    </f-checkbox-group>
  </div>
  <div class="demo-button-style">
    <f-checkbox-group v-model="checkboxGroup2">
      <f-checkbox-button v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </f-checkbox-button>
    </f-checkbox-group>
  </div>
  <div class="demo-button-style">
    <f-checkbox-group v-model="checkboxGroup3" size="small">
      <f-checkbox-button
        v-for="city in cities"
        :key="city"
        :value="city"
        :disabled="city === 'Beijing'"
      >
        {{ city }}
      </f-checkbox-button>
    </f-checkbox-group>
  </div>
  <div class="demo-button-style">
    <f-checkbox-group v-model="checkboxGroup4" size="small" disabled>
      <f-checkbox-button v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </f-checkbox-button>
    </f-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
<\/script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
`,V=`<template>
  <f-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </f-checkbox>
  <f-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <f-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </f-checkbox>
  </f-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CheckboxValueType } from '@fan-ui/components/checkbox'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: CheckboxValueType) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: CheckboxValueType[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
<\/script>
`,S=`<template>
  <f-checkbox-group v-model="checkList">
    <f-checkbox label="Option A" value="Value A" />
    <f-checkbox label="Option B" value="Value B" />
    <f-checkbox label="Option C" value="Value C" />
    <f-checkbox label="disabled" value="Value disabled" disabled />
    <f-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
  </f-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])
<\/script>
`,G=`<template>
  <div>
    <f-checkbox v-model="checked1" disabled>disabled</f-checkbox>
    <f-checkbox v-model="checked2">not disabled</f-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(false)
<\/script>
`,D=`<template>
  <div>
    <f-checkbox v-model="checked1" label="option1"></f-checkbox>
    <f-checkbox v-model="checked2" label="option2"></f-checkbox>
  </div>
  <div>
    <f-checkbox v-model="checked3" label="option3" size="large"></f-checkbox>
    <f-checkbox v-model="checked4" label="option4" size="large"></f-checkbox>
  </div>
  <div>
    <f-checkbox v-model="checked5" label="option5" size="small"></f-checkbox>
    <f-checkbox v-model="checked6" label="option6" size="small"></f-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
<\/script>
`,P=JSON.parse('{"title":"checkbox多选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md","lastUpdated":1760875895000}'),T={name:"components/checkbox.md"},E=Object.assign(T,{setup(W){const a=s(!0);return(Y,e)=>{const c=u("ClientOnly");return f(),k("div",null,[e[6]||(e[6]=t("h1",{id:"checkbox多选框",tabindex:"-1"},[l("checkbox多选框 "),t("a",{class:"header-anchor",href:"#checkbox多选框","aria-label":'Permalink to "checkbox多选框"'},"​")],-1)),e[7]||(e[7]=t("p",null,"在一组备选项中进行多选。",-1)),e[8]||(e[8]=t("h2",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[9]||(e[9]=t("p",null,[l("单独使用可以表示两种状态之间的切换，写在标签中的内容为 "),t("code",null,"checkbox"),l(" 按钮后的介绍。")],-1)),i(o(d(r),null,null,512),[[h,a.value]]),o(c,null,{default:n(()=>[o(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:d(D)},{vue:n(()=>[o(p)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=t("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[11]||(e[11]=t("p",null,[l("多选框不可用的状态。 设置 "),t("code",null,"disabled"),l(" 属性即可")],-1)),i(o(d(r),null,null,512),[[h,a.value]]),o(c,null,{default:n(()=>[o(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:d(G)},{vue:n(()=>[o(x)]),_:1},8,["vueCode"])]),_:1}),e[12]||(e[12]=t("h2",{id:"多选框组",tabindex:"-1"},[l("多选框组 "),t("a",{class:"header-anchor",href:"#多选框组","aria-label":'Permalink to "多选框组"'},"​")],-1)),e[13]||(e[13]=t("p",null,[l("适用于多个勾选框绑定到同一个数组的情景，通过"),t("code",null,"v-model"),l("来绑定数组，用"),t("code",null,"label"),l("来指定选项框对应的"),t("code",null,"value"),l("。")],-1)),i(o(d(r),null,null,512),[[h,a.value]]),o(c,null,{default:n(()=>[o(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{a.value=!1}),vueCode:d(S)},{vue:n(()=>[o(v)]),_:1},8,["vueCode"])]),_:1}),e[14]||(e[14]=t("h2",{id:"中间状态",tabindex:"-1"},[l("中间状态 "),t("a",{class:"header-anchor",href:"#中间状态","aria-label":'Permalink to "中间状态"'},"​")],-1)),e[15]||(e[15]=t("p",null,[t("code",null,"indeterminate"),l(" 属性用以表示 "),t("code",null,"checkbox"),l(" 的不确定状态，一般用于实现全选的效果")],-1)),i(o(d(r),null,null,512),[[h,a.value]]),o(c,null,{default:n(()=>[o(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[3]||(e[3]=()=>{a.value=!1}),vueCode:d(V)},{vue:n(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),e[16]||(e[16]=t("h2",{id:"按钮样式​",tabindex:"-1"},[l("按钮样式​ "),t("a",{class:"header-anchor",href:"#按钮样式​","aria-label":'Permalink to "按钮样式​"'},"​")],-1)),e[17]||(e[17]=t("p",null,"按钮样式的多选组合。",-1)),e[18]||(e[18]=t("p",null,[l("只需要把 "),t("code",null,"f-checkbox"),l(" 元素替换为 "),t("code",null,"f-checkbox-button"),l(" 元素即可。 此外，fan-ui 还提供了"),t("code",null,"size"),l("属性。")],-1)),i(o(d(r),null,null,512),[[h,a.value]]),o(c,null,{default:n(()=>[o(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[4]||(e[4]=()=>{a.value=!1}),vueCode:d(B)},{vue:n(()=>[o(y)]),_:1},8,["vueCode"])]),_:1}),e[19]||(e[19]=t("h2",{id:"带有边框​",tabindex:"-1"},[l("带有边框​ "),t("a",{class:"header-anchor",href:"#带有边框​","aria-label":'Permalink to "带有边框​"'},"​")],-1)),e[20]||(e[20]=t("p",null,[l("设置"),t("code",null,"border"),l("属性可以渲染为带有边框的多选框。")],-1)),i(o(d(r),null,null,512),[[h,a.value]]),o(c,null,{default:n(()=>[o(d(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[5]||(e[5]=()=>{a.value=!1}),vueCode:d(A)},{vue:n(()=>[o(C)]),_:1},8,["vueCode"])]),_:1}),e[21]||(e[21]=m('<h2 id="checkbox-api" tabindex="-1">Checkbox API <a class="header-anchor" href="#checkbox-api" aria-label="Permalink to &quot;Checkbox API&quot;">​</a></h2><h3 id="checkbox-attributes" tabindex="-1">Checkbox Attributes <a class="header-anchor" href="#checkbox-attributes" aria-label="Permalink to &quot;Checkbox Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>v-model\\modelValue</td><td><code>string | number | boolean</code></td><td><code>undefined</code></td><td>用于双向绑定的值</td></tr><tr><td>label</td><td><code>string | number | boolean | object</code></td><td><code>undefined</code></td><td>选项框对应的 <code>value</code></td></tr><tr><td>value</td><td><code>string | number | boolean | object</code></td><td><code>undefined</code></td><td>输入框的值</td></tr><tr><td>indeterminate</td><td><code>boolean</code></td><td>-</td><td>表示 checkbox 的不确定状态</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>-</td><td>禁用状态</td></tr><tr><td>checked</td><td><code>boolean</code></td><td><code>false</code></td><td>是否选中</td></tr><tr><td>name</td><td><code>string</code></td><td><code>undefined</code></td><td>原生 <code>name</code> 属性</td></tr><tr><td>size</td><td><code>large | default | small</code></td><td>-</td><td>组件大小</td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-label="Permalink to &quot;Checkbox Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>val: string | number | boolean</code></td><td>当复选框状态发生变化时触发</td></tr></tbody></table><h2 id="checkboxgroup-api" tabindex="-1">CheckboxGroup API <a class="header-anchor" href="#checkboxgroup-api" aria-label="Permalink to &quot;CheckboxGroup API&quot;">​</a></h2><h3 id="checkboxgroup-attributes" tabindex="-1">CheckboxGroup Attributes <a class="header-anchor" href="#checkboxgroup-attributes" aria-label="Permalink to &quot;CheckboxGroup Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>v-model\\modelValue</td><td><code>Exclude&lt;CheckboxValueType, boolean&gt;[]</code></td><td><code>[]</code></td><td>用于双向绑定的数组，存储选中的值</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>-</td><td>禁用状态</td></tr><tr><td>size</td><td><code>large | default | small</code></td><td><code>default</code></td><td>组件大小</td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events" aria-label="Permalink to &quot;CheckboxGroup Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>val: Exclude&lt;CheckboxValueType, boolean&gt;[]</code></td><td>当复选框组状态发生变化时触发</td></tr></tbody></table><h2 id="checkboxbutton-api" tabindex="-1">CheckboxButton API <a class="header-anchor" href="#checkboxbutton-api" aria-label="Permalink to &quot;CheckboxButton API&quot;">​</a></h2><h3 id="checkboxbutton-attributes" tabindex="-1">CheckboxButton Attributes <a class="header-anchor" href="#checkboxbutton-attributes" aria-label="Permalink to &quot;CheckboxButton Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>v-model\\modelValue</td><td><code>Exclude&lt;CheckboxValueType, boolean&gt;[]</code></td><td><code>[]</code></td><td>用于双向绑定的数组，存储选中的值</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>-</td><td>禁用状态</td></tr><tr><td>size</td><td><code>large | default | small</code></td><td><code>default</code></td><td>组件大小</td></tr></tbody></table><h3 id="checkboxbutton-events" tabindex="-1">CheckboxButton Events <a class="header-anchor" href="#checkboxbutton-events" aria-label="Permalink to &quot;CheckboxButton Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>val: Exclude&lt;CheckboxValueType, boolean&gt;[]</code></td><td>当复选框组状态发生变化时触发</td></tr></tbody></table>',15))])}}});export{P as __pageData,E as default};
