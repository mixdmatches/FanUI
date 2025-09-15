<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue'
import { paginationProps } from './pagination'
import { Left, Right } from '@icon-park/vue-next'
import { createNamespace } from '@fan-ui/utils'

defineOptions({
  name: 'f-pagination'
})

const bem = createNamespace('pagination')

const props = defineProps(paginationProps)
const emit = defineEmits(['update:current', 'update:pageSize', 'change'])

const currentPage = ref(props.current)

watch(
  () => currentPage.value,
  newVal => {
    currentPage.value = newVal
    emit('update:current', newVal)
  }
)

const pageCount = computed(() => Math.ceil(props.total / currentPageSize.value))

const currentPageSize = ref(props.pageSize)

watch(
  () => currentPageSize.value,
  newVal => {
    emit('update:pageSize', newVal)
  }
)

const isShowDropdown = computed(() => {
  return props.showTotal && props.total > 50
})

// 这里是处理，如果 currentPage 是最后一页（即pageCount），pageSize从10变化到50，pageCount变小，那么 currentPage 也应该相应变小
watchEffect(() => {
  if (currentPage.value > pageCount.value) {
    currentPage.value = pageCount.value
  }
})

const pageSizeOptions = computed(() =>
  props.pageSizeOptions.map(item => ({
    label: item + ' 条/页',
    pageSize: item
  }))
)

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

const handleSelectPageSize = (pageSize: number | string) => {
  emit('update:pageSize', pageSize)
  currentPageSize.value = Number(pageSize)
}

const jumperPage = ref(1)

const handleBlur = () => {
  if (jumperPage.value > pageCount.value) return
  currentPage.value = Number(jumperPage.value)
}
</script>

<template>
  <div v-if="pageCount !== 1" :class="bem.b()">
    <span :class="bem.e('total')" v-if="showTotal">共{{ total }}条</span>
    <button
      type="button"
      :class="[bem.e('prev'), bem.is('disabled', currentPage <= 1)]"
      @click="handlePrevClick"
    >
      <left theme="outline" size="24" />
    </button>
    <ul :class="bem.b('list')">
      <li
        :class="[bem.be('list', 'item'), bem.is('active', currentPage === 1)]"
        @click="handleChange(1)"
      >
        1
      </li>
      <li v-if="isShowPrevMore" :class="bem.bm('list', 'more')">...</li>
      <li
        v-for="item in middlePages"
        :key="item"
        :class="[
          bem.be('list', 'item'),
          bem.is('active', item === currentPage)
        ]"
        @click="handleChange(item)"
      >
        {{ item }}
      </li>
      <li v-if="isShowNextMore" :class="bem.bm('list', 'more')">...</li>
      <li
        :class="[
          bem.be('list', 'item'),
          bem.is('active', currentPage === pageCount)
        ]"
        @click="handleChange(pageCount)"
      >
        {{ pageCount }}
      </li>
    </ul>
    <button
      type="button"
      :class="[bem.e('next'), bem.is('disabled', currentPage >= pageCount)]"
      @click="handleNextClick"
    >
      <right theme="outline" size="24" />
    </button>
    <f-dropdown no-arrow v-if="isShowDropdown">
      <span :class="bem.e('dropdown')">{{ currentPageSize }} 条/页</span>
      <template #dropdown>
        <f-dropdown-menu>
          <f-dropdown-item
            v-for="item in pageSizeOptions"
            :key="item.pageSize"
            @click="handleSelectPageSize(item.pageSize)"
          >
            {{ item.label }}
          </f-dropdown-item>
        </f-dropdown-menu>
      </template>
    </f-dropdown>
    <div :class="bem.e('goto')" v-if="showJumper">
      跳至
      <f-input
        type="number"
        @blur="handleBlur"
        v-model="jumperPage"
        style="width: 60px"
      />
      / {{ pageCount }} 页
    </div>
  </div>
</template>
