<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { paginationProps } from './pagination'

const props = defineProps(paginationProps)
const emit = defineEmits(['update:modelValue', 'change'])

const currentPage = ref(props.modelValue)

watch(
  () => currentPage.value,
  newVal => {
    currentPage.value = newVal
    emit('update:modelValue', newVal)
  }
)

const pageCount = computed(() => Math.ceil(props.total / props.pageSize))

// 最多展示除开头页和尾页的5个中间页码
const MAX_MEDDLE_PAGES_COUNT = 5
// 最多展示7个页码
const MAX_VISIBLE_PAGES = MAX_MEDDLE_PAGES_COUNT + 2
// 当前页码距离首尾页码多少距离才显示省略号
const MIDDLE_PAGE_POSITION = Math.floor(MAX_MEDDLE_PAGES_COUNT / 2) + 1

const isShowPrevMore = computed(() => {
  return (
    pageCount.value > MAX_VISIBLE_PAGES &&
    currentPage.value > MIDDLE_PAGE_POSITION + 1
  )
})

const isShowNextMore = computed(() => {
  return (
    pageCount.value > MAX_VISIBLE_PAGES &&
    currentPage.value < pageCount.value - MIDDLE_PAGE_POSITION
  )
})

/**
 * 生成中间页码
 */
const generateMiddlePageCount = () => {
  // 工具函数：生成连续页码数组
  const generatePageRange = (
    start: number,
    count: number = MAX_MEDDLE_PAGES_COUNT
  ) => Array.from({ length: count }, (_, i) => start + i)

  // 边界情况处理
  if (pageCount.value <= MAX_VISIBLE_PAGES) {
    return generatePageRange(2, pageCount.value - 2)
  }

  // 根据当前页码位置生成对应页码
  const pageRanges = {
    nearStart: () => generatePageRange(2),
    nearEnd: () => generatePageRange(pageCount.value - MAX_MEDDLE_PAGES_COUNT),
    inMiddle: () => generatePageRange(currentPage.value - 2)
  }

  if (currentPage.value <= MIDDLE_PAGE_POSITION + 1)
    return pageRanges.nearStart()
  if (currentPage.value >= pageCount.value - MIDDLE_PAGE_POSITION)
    return pageRanges.nearEnd()

  return pageRanges.inMiddle()
}

const middlePages = computed(() => generateMiddlePageCount())

const handleChange = (item: number) => {
  currentPage.value = item
  emit('change', item)
}

const handlePrevClick = () => {
  if (currentPage.value <= 1) return
  currentPage.value--
  emit('change', currentPage.value)
}

const handleNextClick = () => {
  if (currentPage.value >= pageCount.value) return
  currentPage.value++
  emit('change', currentPage.value)
}
</script>

<template>
  <div v-if="pageCount !== 1" class="page-container">
    <span class="page-total">共{{ total }}条</span>
    <button
      type="button"
      :class="['page__button__prev', { disabled: currentPage <= 1 }]"
      @click="handlePrevClick"
    >
      prev
    </button>
    <ul class="page-list">
      <li
        :class="['page-list__item', { active: currentPage === 1 }]"
        @click="handleChange(1)"
      >
        1
      </li>
      <li v-if="isShowPrevMore" class="more">...</li>
      <li
        v-for="item in middlePages"
        :key="item"
        :class="['page-list__item', { active: item === currentPage }]"
        @click="handleChange(item)"
      >
        {{ item }}
      </li>
      <li v-if="isShowNextMore" class="more">...</li>
      <li
        :class="['page-list__item', { active: currentPage === pageCount }]"
        @click="handleChange(pageCount)"
      >
        {{ pageCount }}
      </li>
    </ul>
    <button
      type="button"
      :class="['page__button__next', { disabled: currentPage >= pageCount }]"
      @click="handleNextClick"
    >
      next
    </button>
  </div>
</template>

<style scoped lang="scss">
li {
  list-style: none;
}
button {
  border: none;
  border-radius: 4px;
  background-color: inherit;
  padding: 4px;
  color: #1677ff;
  cursor: pointer;
  &:hover {
    color: rgba(22, 119, 255, 0.8);
  }
}
.page-container {
  display: flex;
  align-items: center;
  gap: 4px;
  .disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .page-list {
    padding: 0 8px;
    display: flex;
    gap: 8px;
    .more {
      cursor: pointer;
    }
    .page-list__item {
      line-height: 18px;
      text-align: center;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: #efefef;
      }
    }
    .active {
      background: #1677ff;
      color: #fff;
      &:hover {
        background: #1677ff;
      }
    }
  }
}
</style>
