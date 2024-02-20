<template>
  <dashboard-restore-panel
    class="dashboard__restore-panel"
    :elements="restoreElements"
    @restore-element="showElement"
  />
  <div class="dashboard__container" ref="container">
    <draggable-resizable-container
      :grid="grid"
      :show-grid="true"
      class="dashboard__draggable-resizable"
    >
      <draggable-resizable-vue
        v-for="element in visibleElements"
        :key="element.id"
        @mousedown="activateElement(element)"
        @mouseup="movingElement(element)"
        v-model:x="element.x"
        v-model:y="element.y"
        v-model:h="element.height"
        v-model:w="element.width"
        v-model:active="element.isActive"
        :z="element.zIndex"
        :grid="grid"
        drag-cancel=".drag-cancel"
        class="dashboard__draggable-resizable-vue"
      >
        <DashboardItem
          style="overflow: hidden"
          :element="element"
          :is-body-draggable="true"
          @hide-element="hideElement(element)"
          class="dashboard__item"
        />
      </draggable-resizable-vue>
    </draggable-resizable-container>
  </div>
</template>
<script setup lang="ts">
import { DraggableResizableVue, DraggableResizableContainer } from 'draggable-resizable-vue3'
import { computed, ref } from 'vue'
import DashboardItem from '@/components/DashboardItem.vue'
import type { iDashboardItem } from '@/types'
import DashboardRestorePanel from '@/components/DashboardRestorePanel.vue'
import { useElementSize } from '@vueuse/core'
import { useDashboards } from '@/composables/useDashboards'

const container = ref(null)
const { width: containerWidth, height: containerHeight } = useElementSize(container)
const { elements, dashboardWidth, dashboardHeight, grid } = useDashboards()

const visibleElements = computed(() => {
  return elements.value.filter((el) => el.visible)
})

const restoreElements = computed(() => {
  return elements.value.filter((el) => !el.visible)
})
function activateElement(element: iDashboardItem) {
  const selectedElement = elements.value.splice(elements.value.indexOf(element), 1)[0]
  elements.value.push(selectedElement)
  elements.value.forEach((el, index) => {
    el.zIndex = index
  })
}

function movingElement(element: iDashboardItem) {
  element.zIndex = elements.value.length
}

function hideElement(element: iDashboardItem) {
  element.visible = false
}

function showElement(element: iDashboardItem) {
  element.visible = true
  element.width = dashboardWidth
  element.height = dashboardHeight

  element.x = Math.round(containerWidth.value / 2 - dashboardWidth / 2)
  element.y = Math.round(containerHeight.value / 2 - dashboardHeight / 2)

  activateElement(element)
}
</script>
<style scoped>
.dashboard__container {
  position: relative;
  background-color: var(--vt-c-indigo);
  width: 100%;
}
.dashboard__draggable-resizable {
  width: 100%;
  height: 90vh;
}
</style>
