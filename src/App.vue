<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/first">Task 1</RouterLink>
        <RouterLink to="/second">Task 2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
</style>
