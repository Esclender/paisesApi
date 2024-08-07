<template>

  <main class="m-2 d-flex flex-column justify-content-center align-items-center ">
    <SidebarComponent />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import SidebarComponent from '@/components/ResponsiveSidebar.vue'


</script>
