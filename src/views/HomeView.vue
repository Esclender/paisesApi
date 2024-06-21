<template>
  <CountryList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountryList from '@/components/CountryList.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    CountryList,
  }
});
</script>

<style scoped></style>