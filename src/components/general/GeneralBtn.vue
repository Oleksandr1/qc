<template>
  <button
    class="general-btn__btn"
    :style="{ color: color, backgroundColor: bgColor }"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
withDefaults(
  defineProps<{
    text: string
    color?: string
    bgColor?: string
  }>(),
  {
    text: 'Button',
    color: 'white',
    bgColor: 'var(--vt-c-aqua)'
  }
)
</script>
<style scoped>
.general-btn__btn {
  padding: 1em 4em;
  margin: 0 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bolder;
  font-size: 16px;
}
.general-btn__btn:active {
  box-shadow: 0 2px var(--vt-c-divider-dark-2);
  transform: translateY(2px);
}
</style>
