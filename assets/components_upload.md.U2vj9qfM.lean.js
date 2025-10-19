import{g as f,r as u,c as m,o as b,a as t,p as i,b as d,al as v,e as n,S as s,u as o,w as a}from"./chunks/framework.Br5qlODI.js";import{aq as h,ar as U}from"./chunks/theme.COWshNnW.js";import{O as c,E as p}from"./chunks/index.CdocGXei.js";const F=`<template>
  <div>
    <f-upload
      v-model:file-list="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      drag
      show-file-list
    >
      <f-button :icon="Upload" type="primary">上传</f-button>
      <template #tip>
        <div class="f-upload__tip">不超过500kb</div>
      </template>
    </f-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from '@icon-park/vue-next'
import type { UploadProps } from '@fan-ui/components/upload'
const fileList = ref([])
const handleRemove: UploadProps['onRemove'] = (file, fileList) => {
  console.log(file, fileList)
}
const beforeRemove: UploadProps['beforeRemove'] = (file, fileList) => {
  console.log(file, fileList)
  return false
}
<\/script>
`,g=`<template>
  <div>
    <f-upload
      v-model:file-list="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
    >
      <f-button :icon="Upload" type="primary">上传</f-button>
      <template #tip>
        <div class="f-upload__tip">不超过500kb</div>
      </template>
    </f-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from '@icon-park/vue-next'
import type { UploadProps } from '@fan-ui/components/upload'
const fileList = ref([])
const handleRemove: UploadProps['onRemove'] = (file, fileList) => {
  console.log(file, fileList)
}
const beforeRemove: UploadProps['beforeRemove'] = (file, fileList) => {
  console.log(file, fileList)
  return false
}
<\/script>
`,B=JSON.parse('{"title":"Upload上传","description":"","frontmatter":{},"headers":[],"relativePath":"components/upload.md","filePath":"components/upload.md","lastUpdated":1760875895000}'),k={name:"components/upload.md"},S=Object.assign(k,{setup(P){const l=f(!0);return(_,e)=>{const r=u("ClientOnly");return b(),m("div",null,[e[2]||(e[2]=t("h1",{id:"upload上传",tabindex:"-1"},[n("Upload上传 "),t("a",{class:"header-anchor",href:"#upload上传","aria-label":'Permalink to "Upload上传"'},"​")],-1)),e[3]||(e[3]=t("p",null,"通过点击或拖拽上传",-1)),e[4]||(e[4]=t("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[5]||(e[5]=t("p",null,"通过 slot 你可以传入自定义的上传按钮类型和文字提示,可通过设置 before-remove 来阻止文件移除操作。",-1)),i(d(o(c),null,null,512),[[s,l.value]]),d(r,null,{default:a(()=>[d(o(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:o(g)},{vue:a(()=>[d(h)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"拖拽上传",tabindex:"-1"},[n("拖拽上传 "),t("a",{class:"header-anchor",href:"#拖拽上传","aria-label":'Permalink to "拖拽上传"'},"​")],-1)),e[7]||(e[7]=t("p",null,"你可以将文件拖拽到特定区域以进行上传。",-1)),i(d(o(c),null,null,512),[[s,l.value]]),d(r,null,{default:a(()=>[d(o(p),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:o(F)},{vue:a(()=>[d(U)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=v("",5))])}}});export{B as __pageData,S as default};
