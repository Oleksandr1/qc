<template>
    <div class="dashboard">
      <div class="dashboard-title">{{element.name}}
      <button class="dashboard-title--remove-btn" @click="hideDashboard()"><icon-remove /></button>
      </div>
      <div class="dashboard-body" :class="{'drag-cancel': !isBodyDraggable}">
        x: {{ element.x }}<br />
        y: {{ element.y }}<br />
        height: {{ element.height }}<br />
        width: {{ element.width }}<br />
        zIndex={{ element.zIndex }}<br />
        isBodyDraggable={{ isBodyDraggable }}
      </div>
    </div>

</template>
<script setup lang="ts">
import type {iDashboardItem} from "@/types";
import IconRemove from "@/components/icons/IconRemove.vue";

const props = withDefaults( defineProps<{
  element: iDashboardItem,
  isBodyDraggable: boolean
}>(), {
  isBodyDraggable: false
})

const emits = defineEmits(['hide-element']);

const hideDashboard = () => {
  emits('hide-element', props.element);
}

</script>
<style scoped>
.dashboard {
  width: 100%;
  height: 100%;
  background-color: dimgray
}
.dashboard-title {
  display: flex;
  justify-content: space-between;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  text-align: center;
}
.dashboard-body {
  padding: 10px;
  color: white;
}
.dashboard-title--remove-btn{
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
