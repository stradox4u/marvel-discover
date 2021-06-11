<template>
  <div v-if="noResults" class="mx-auto p-4">
    <p class="sm:text-base text-sm font-poppins text-center">No results found for your query. Perhaps you'd like to try again?</p>
  </div>
  <featured-characters
    v-else
    :featuredItems="results"
    :loadingData="isSearching"
    :title="'Search Results'"
  ></featured-characters>
</template>


<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import FeaturedCharacters from "./MyFeaturedCharacters.vue"


export default {
  components: {
    FeaturedCharacters,
  },
  setup() {
    const store = useStore()

    const results = computed(() => {
      return store.getters['search/getSearchResults']
    })

    const isSearching = computed(() => {
      return store.getters['search/getSearchingState']
    })

    const noResults = computed(() => {
      return store.getters['search/getNoResultsFoundState']
    })
    

    return {
      results,
      isSearching,
      noResults,
    }
  },
}
</script>