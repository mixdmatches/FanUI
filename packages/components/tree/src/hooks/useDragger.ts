import { provide, reactive, Ref } from 'vue'
import type {
  DragTreeNode,
  DropTreeOption,
  NodeDropType,
  TreeNode
} from '../types'
import { createNamespace } from '@fan-ui/utils'
import { dragNodeKey, DragState } from '../tree'

export const useDragger = (
  props,
  dragContainer$,
  dropIndicator$,
  tree: Ref<TreeNode[]>
) => {
  const dragState = reactive<DragState>({
    allowDrop: false,
    dropType: null,
    draggingNode: null,
    showDropIndicator: true,
    dropNode: null
  })

  const bem = createNamespace('tree-node')

  // 开始拖拽
  const treeNodeDragStart = ({ event, node }: DropTreeOption) => {
    if (!event.dataTransfer) return
    dragState.draggingNode = node

    event.dataTransfer.effectAllowed = 'move'
    setTimeout(() => {
      node.$el?.classList.add(bem.is('moving', true))
    })
  }

  // 拖拽过程中
  const treeNodeDragOver = ({ event, node }: DropTreeOption) => {
    if (!event.dataTransfer) return
    // 1.对比新旧节点，如果拖拽过程中经过自己的节点，移除类名drop-inner
    const currentNode = node
    const oldDropNode = dragState.draggingNode
    if (currentNode.treeNode.key !== oldDropNode?.treeNode.key) {
      const labelNode = currentNode.$el?.querySelector(`.${bem.e('label')}`)
      labelNode?.classList.remove(bem.e('drop-inner'))
    }

    let dropPrev = true
    let dropInner = true
    let dropNext = true

    // 传给用户判断是否能插入到一个节点的上边/下边/里面，根据结果赋值-TODO
    //

    if (dropPrev || dropInner || dropNext) {
      dragState.dropNode = node
    } else {
      dragState.dropNode = null
    }
    const draggingNode = dragState.draggingNode
    // 判断dropNode的上一个元素和下一个元素和children是否是/有draggingNode
    if (currentNode.$el?.previousSibling === draggingNode?.$el) {
      dropPrev = false
    }
    if (currentNode.$el?.nextSibling === draggingNode?.$el) {
      dropNext = false
    }
    if (currentNode.$el?.contains(draggingNode?.$el as Node)) {
      dropInner = false
    }
    if (dropPrev || dropInner || dropNext) {
      dragState.dropType = dropPrev
        ? 'before'
        : dropInner
          ? 'inner'
          : dropNext
            ? 'after'
            : 'none'
    }
    if (draggingNode?.$el) {
      if (
        draggingNode.$el === currentNode.$el ||
        draggingNode.$el.contains(currentNode.$el)
      ) {
        dropPrev = false
        dropInner = false
        dropNext = false
      }
    }

    const dropEl = currentNode.$el!
    const targetPosition = dropEl
      .querySelector(`.${bem.e('content')}`)!
      .getBoundingClientRect()

    let dropType: NodeDropType
    const prevPercent = dropPrev ? (dropInner ? 0.25 : dropNext ? 0.45 : 1) : -1
    const nextPercent = dropNext ? (dropInner ? 0.75 : dropPrev ? 0.55 : 0) : 1

    const distance = event.clientY - targetPosition.top
    if (distance < targetPosition.height * prevPercent) {
      dropType = 'before'
    } else if (distance > targetPosition.height * nextPercent) {
      dropType = 'after'
    } else if (dropInner) {
      dropType = 'inner'
    } else {
      dropType = 'none'
    }
    if (dropType === 'inner') {
      dropEl.classList.add(bem.e('drop-inner'))
    } else {
      dropEl.classList.remove(bem.e('drop-inner'))
    }

    // 设置提示线的位置
    let indicatorTop = -9999
    const treePosition = dragContainer$.value.getBoundingClientRect()
    const labelPosition = dropEl
      .querySelector(`.${bem.e('label')}`)
      ?.getBoundingClientRect()
    const indicator = dropIndicator$.value

    if (dropType === 'before') {
      indicatorTop = labelPosition!.top - treePosition.top
    } else if (dropType === 'after') {
      indicatorTop = labelPosition!.bottom - treePosition.top
    }
    indicator.style.top = `${indicatorTop}px`
    indicator.style.left = `${labelPosition!.left - treePosition.left}px`

    dragState.showDropIndicator = dropType === 'before' || dropType === 'after'
    dragState.dropType = dropType
  }

  // 拖拽结束
  const treeNodeDragEnd = ({ event }: DropTreeOption) => {
    const { dropType, draggingNode, dropNode } = dragState
    event.preventDefault()

    if (dropType !== 'none' && draggingNode && dropNode) {
      updateTreeData(draggingNode, dropNode, dropType!)
    }

    dropNode?.$el?.classList.remove(bem.e('drop-inner'))
    draggingNode?.$el?.classList.remove(bem.is('moving', true))

    dragState.showDropIndicator = false
    dragState.dropType = null
    dragState.draggingNode = null
    dragState.dropNode = null
  }
  // 在useDragger函数中添加一个更新数据结构的辅助函数
  const updateTreeData = (
    draggingNode: DragTreeNode,
    dropNode: DragTreeNode,
    dropType: NodeDropType
  ) => {
    // 1. 从原位置移除节点
    let originalParent = null
    let originalIndex = -1

    // 查找draggingNode在原数据结构中的位置
    const findAndRemoveNode = (nodes, parent = null) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].key === draggingNode.treeNode.key) {
          originalParent = parent
          originalIndex = i
          return nodes.splice(i, 1)[0]
        }
        if (nodes[i].children && nodes[i].children.length) {
          const found = findAndRemoveNode(nodes[i].children, nodes[i])
          if (found) return found
        }
      }
      return null
    }

    const nodeToMove = findAndRemoveNode(tree.value)
    if (!nodeToMove) return

    // 2. 根据dropType插入节点到新位置
    switch (dropType) {
      case 'before':
      case 'after': {
        // 查找dropNode的父节点
        const findDropParentAndInsert = nodes => {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].key === dropNode.treeNode.key) {
              const insertIndex = dropType === 'before' ? i : i + 1
              nodes.splice(insertIndex, 0, nodeToMove)
              return true
            }
            if (nodes[i].children && nodes[i].children.length) {
              if (findDropParentAndInsert(nodes[i].children)) {
                return true
              }
            }
          }
          return false
        }
        findDropParentAndInsert(tree.value)
        break
      }
      case 'inner': {
        // 查找dropNode并将节点添加到其children中
        const findDropNodeAndInsert = nodes => {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].key === dropNode.treeNode.key) {
              if (!nodes[i].children) {
                nodes[i].children = []
              }
              nodes[i].children.push(nodeToMove)
              // 更新节点为非叶子节点
              nodes[i].isLeaf = false
              return true
            }
            if (nodes[i].children && nodes[i].children.length) {
              if (findDropNodeAndInsert(nodes[i].children)) {
                return true
              }
            }
          }
          return false
        }
        findDropNodeAndInsert(tree.value)
        break
      }
    }
  }

  provide(dragNodeKey, {
    dragState,
    treeNodeDragStart,
    treeNodeDragOver,
    treeNodeDragEnd
  })

  return {
    dragState
  }
}
