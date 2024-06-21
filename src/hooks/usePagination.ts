import { ref, computed } from 'vue';

export const usePagination = (items: any[], itemsPerPage: number) => {
  const currentPage = ref(1);

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  });

  const totalPages = computed(() => Math.ceil(items.length / itemsPerPage));

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };

  return {
    currentPage,
    paginatedItems,
    totalPages,
    nextPage,
    prevPage,
  };
};
