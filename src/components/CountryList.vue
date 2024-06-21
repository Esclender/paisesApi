<template>
  <div class="container">
    <div class="mb-3">
      <input v-model="searchQuery" @input="callFetching" class="form-control" placeholder="Search for a country" />
    </div>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="alert alert-danger">
      Error fetching countries
    </div>
    <div v-else>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="country in countries" :key="country.code" class="col">
          <div class="card h-100">
            <img v-if="country.image" :src="country.image" :alt="country.name" class="card-img-top" />
            <div class="card-body">
              <div class="d-flex flex-column justify-content-start align-items-start mb-2">
                <h5 class="card-title">
                  <img :src="country.flagImage" class="card-flag-img" /> {{ country.name }}
                </h5>
                <p class="card-text">
                  <i class="fas fa-globe"></i> {{ country.continent.name }}
                </p>
              </div>

              <CountryModal :countryData="country" :modal-id="country.code" />
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation" class="my-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: page === 1 }">
            <button class="page-link" @click="previousPage" :disabled="page === 1">Previous</button>
          </li>
          <li class="page-item" :class="{ disabled: countries.length < itemsPerPage }">
            <button class="page-link" @click="nextPage" :disabled="countries.length < itemsPerPage">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { fetchCountries } from '@/services/countryService';
import { type ICountryDataInfo } from '@/api/types';
import CountryModal from '@/components/CountryModal.vue'

export default defineComponent({
  name: 'CountryList',
  components: {
    CountryModal,
  },
  setup() {
    const countries = ref<ICountryDataInfo[]>([]);
    const searchQuery = ref('');
    const loading = ref(false);
    const error = ref(false);
    const page = ref(1);
    const itemsPerPage = 10;

    const callFetching = async () => {
      loading.value = true;
      error.value = false;
      try {
        countries.value = await fetchCountries(searchQuery.value, page.value, itemsPerPage);
      } catch (err) {
        console.error(err);
        error.value = true;
      } finally {
        loading.value = false;
      }
    };

    const nextPage = () => {
      page.value++;
      callFetching();
    };

    const previousPage = () => {
      if (page.value > 1) {
        page.value--;
        callFetching();
      }
    };

    watch([searchQuery, page], callFetching);

    callFetching();

    return {
      countries,
      searchQuery,
      loading,
      error,
      page,
      itemsPerPage,
      nextPage,
      previousPage,
      callFetching,
    };
  },
});
</script>

<style lang="scss"  scoped>
.country-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.pagination {
  display: flex;
  justify-content: space-between;
}

.card-flag-img {
  width: 60px;
  margin-right: 20px;
}
</style>
