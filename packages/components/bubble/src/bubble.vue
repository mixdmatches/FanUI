<template>
  <div :class="[bem.b(), bem.m(avatarPosition)]">
    <!-- 左边的头像和名字 -->
    <div
      v-if="avatarConfig && align === 'left'"
      :class="[bem.be('avatar', 'left')]"
    >
      <span v-if="avatarPosition === 'top'" :class="bem.be('avatar', 'name')">{{
        avatarConfig.displayName
      }}</span>
      <f-avatar
        :style="{
          width: avatarConfig.width + 'px',
          height: avatarConfig.height + 'px'
        }"
        :src="avatarConfig.imgSrc"
        :shape="avatarConfig.isRound ? 'circle' : 'square'"
      ></f-avatar>
    </div>
    <!-- content内容 -->
    <div
      :class="[bem.e('content'), { [bem.m(variant)]: variant }, bem.m(align)]"
    >
      <!-- 展示Loading -->
      <template v-if="loading">
        <slot v-if="$slots.loading" name="loading"></slot>
        <f-icon v-else :class="bem.is('loading', loading)">
          <component :is="Loading"></component>
        </f-icon>
      </template>
      <!-- 内容 -->
      <template v-else>
        {{ content }}
      </template>
    </div>
    <!-- 右边的头像和名字 -->
    <div
      v-if="avatarConfig && align === 'right'"
      :class="[bem.be('avatar', 'right')]"
    >
      <span v-if="avatarPosition === 'top'" :class="bem.be('avatar', 'name')">{{
        avatarConfig.displayName
      }}</span>
      <f-avatar
        :style="{
          width: avatarConfig.width + 'px',
          height: avatarConfig.height + 'px'
        }"
        :src="avatarConfig.imgSrc"
        :shape="avatarConfig.isRound ? 'circle' : 'square'"
      ></f-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { bubbleProps } from './bubble'
import { createNamespace } from '@fan-ui/utils'
import Loading from './icon/loading.vue'
import FIcon from '@fan-ui/components/icon'
import FAvatar from '@fan-ui/components/avatar'

defineOptions({
  name: 'f-bubble'
})

defineProps(bubbleProps)

const bem = createNamespace('bubble')
</script>

<style scoped></style>
