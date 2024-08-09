<template>
  <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" :data-bs-target="`#${modalId}`">
    Mas Info
  </button>


  <div :id="`${modalId}`" class="modal fade" tabindex="-1" :aria-labelledby="`${modalId}Label`" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <img :src="countryData.flagImage" class="card-flag-img" />
          <h5 class="modal-title" :id="`${modalId}Label`">{{ countryData?.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div v-if="countryData">
            <img :src="countryData.image" alt="Country Image" class="img-fluid mb-3" />
            <p><strong><i class="fas fa-building"></i> Capital:</strong> {{ countryData.capital }}</p>
            <p><strong><i class="fas fa-money-bill"></i> Monedas:</strong> {{ countryData.currencies.join(', ') }}</p>
            <p><strong><i class="fas fa-phone"></i> Telefonos:</strong> {{ countryData.phones.join(', ') }}</p>
            <p><strong><i class="fas fa-language"></i> Languages:</strong> {{ countryData.languages.map(lang =>
              lang.name).join(', ') }}</p>
            <p><strong><i class="fas fa-flag"></i> Regiones:</strong> {{ countryData.states.map(state => state.name)
              .join(', ') }}</p>
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
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
    countryDataProp: {
      type: Object as PropType<ICountryDataInfo>,
      required: true,
    },
    modalIdProp: {
      type: String,
      required: true,
    },
  },
  setup(props) {


    return {
      countryData: props.countryDataProp,
      modalId: props.modalIdProp
    };

  },
});
</script>

<style lang="scss" scoped>
$color-building: #3498db;
$color-money-bill: #2ecc71;
$color-phone: #e74c3c;
$color-language: #f39c12;
$color-flag: #9b59b6;

.modal-body {
  p {
    strong {
      display: inline-block;
      width: 120px;
    }

    i {
      color: #888;
    }
  }

  .fa-building {
    color: $color-building;
  }

  .fa-money-bill {
    color: $color-money-bill;
  }

  .fa-phone {
    color: $color-phone;
  }

  .fa-language {
    color: $color-language;
  }

  .fa-flag {
    color: $color-flag;
  }
}

.card-flag-img {
  width: 60px;
  margin-right: 20px;
}
</style>
