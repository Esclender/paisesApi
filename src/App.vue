<template>
  <SidebarComponent />

  <main class="m-2 d-flex justify-content-center align-items-center ">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import SidebarComponent from '@/components/ResponsiveSidebar.vue'


</script>
