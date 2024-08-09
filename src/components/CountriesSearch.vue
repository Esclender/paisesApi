<template>
  <div class="mb-3 d-flex">
    <input v-model="inputValue" @input="callUpdateSearchQuery" @focus="showModal" @blur="handleBlur"
      @keydown="handleKeydown" class="form-control" placeholder="Search for a country" />
  </div>

  <div :key="cleanedVersion" :class="{ 'd-none': !isModalVisible }" class="card custom-modal">
    <div class="card-header d-flex justify-content-between">
      <h5 class="fw-medium">Filtrar por Continente</h5>
      <button type="button" class="text-decoration-underline" @click="clearFilter">Limpiar</button>
    </div>
    <div class="card-body grid">
      <ContinentFilterOption v-for="continent in continentOptions" :key="continent.code" :continentProp="continent"
        :saveFilterCodeProp="updateContinentFilter">
      </ContinentFilterOption>
    </div>
  </div>

</template>

<script lang="ts">
import type { IContinentDataInfo } from '@/api/types';

import { fetchContinents } from '@/services/continentService';
import { defineComponent, onMounted, ref, type Ref, type VNodeRef } from 'vue';

import ContinentFilterOption from './sub/ContinentFilterOption.vue';

export default defineComponent({
  name: 'CountriesSearch',
  components: {
    ContinentFilterOption
  },
  props: {
    searchQuery: {
      type: String,
      required: true
    },
    updateSearchQuery: {
      type: Function,
      required: true
    },
    updateContinentFilter: {
      type: Function,
      required: true
    },
    cleanFilterProp: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const continentOptions: Ref<IContinentDataInfo[]> = ref([]);
    const isModalVisible = ref(false);
    const isEnterPressed = ref(false);
    const cleanedVersion = ref(0);
    const inputValue = ref(props.searchQuery);
    const inputRef: Ref<VNodeRef | undefined> = ref(undefined);


    const callFetchingContinents = async () => {
      continentOptions.value = (await fetchContinents()).continents;
    };

    const callFetchingContinentsBySearch = async (code: string) => {
      hideModal();
      blurInput()
      props.updateContinentFilter(code);
    };

    const blurInput = () => {
      const inputElement = inputRef.value as HTMLInputElement | undefined;
      if (inputElement) {
        inputElement.blur();
      }
    };

    const callUpdateSearchQuery = (event: any) => {
      props.updateSearchQuery(event.target.value);
    };

    const showModal = async () => {
      isModalVisible.value = true;
    };

    const hideModal = async () => {
      isModalVisible.value = false;
    };


    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        isEnterPressed.value = true;
        hideModal();
      }
    };

    const handleBlur = (event: FocusEvent) => {
      if (!isEnterPressed.value) {
        event.preventDefault();
        (event.target as HTMLInputElement).focus();
      } else {
        isEnterPressed.value = false;
      }
    };

    const clearFilter = () => {
      cleanedVersion.value++;
      props.cleanFilterProp();
    };

    onMounted(() => {
      callFetchingContinents();
    });

    return {
      callFetchingContinentsBySearch,
      callUpdateSearchQuery,
      clearFilter,
      showModal,
      hideModal,
      handleKeydown,
      handleBlur,
      cleanedVersion,
      isModalVisible,
      continentOptions,
      inputValue,
      inputRef
    };
  }
});
</script>

<style lang="scss">
.custom-modal {
  width: 85%;
  height: 70%;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      border-radius: 10px;
    }

    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: contain;
    }

    span {
      padding: 5px;
    }

    .active-class {
      border: 2px solid #00bfff;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: blue;
  }
}

@media (min-width: 768px) {
  .custom-modal {
    width: 75%;
    top: 50%;


    .grid {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(50px, 200px);
    }
  }
}
</style>
