<template>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${modalId}`">
    Mas Info
  </button>


  <div :id="`${modalId}`" class="modal fade" tabindex="-1" :aria-labelledby="`${modalId}Label`" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`${modalId}Label`">{{ countryData?.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="countryData">
            <img :src="countryData.image" alt="Country Image" class="img-fluid mb-3" />
            <p><strong>Capital:</strong> {{ countryData.capital }}</p>
            <p><strong>Currencies:</strong> {{ countryData.currencies.join(', ') }}</p>
            <p><strong>Phones:</strong> {{ countryData.phones.join(', ') }}</p>
            <p><strong>Languages:</strong> {{ countryData.languages.map(lang => lang.name).join(', ') }}</p>
            <p><strong>States:</strong> {{ countryData.states.map(state => state.name).join(', ') }}</p>
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type ICountryDataInfo } from '@/api/types'

export default defineComponent({
  name: 'CountryModal',
  props: {
    countryData: {
      type: Object as PropType<ICountryDataInfo>,
      required: true,
    },
    modalId: {
      type: String,
      required: true,
    },
  },
  setup(props) {


    return {
      countryData: props.countryData,
      modalId: props.modalId
    };

  },
});
</script>

<style scoped></style>
