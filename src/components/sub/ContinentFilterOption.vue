<template>
  <div @click="saveFilter(continent.code)" :key="continent.code" :class="{ 'active-class': isActive }">
    <img :src="continent.image" alt="">
    <span>{{ continent.name }}</span>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'ContinentFilterOption',
  props: {
    continentProp: {
      type: Object,
      required: true
    },
    saveFilterCodeProp: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const isActive = ref(false);

    const toogleActive = () => {
      isActive.value = !isActive.value;
    };

    const saveFilter = (code: string) => {
      toogleActive()
      props.saveFilterCodeProp(code);
    };

    return {
      continent: props.continentProp,
      isActive,
      saveFilter
    }
  }
});
</script>