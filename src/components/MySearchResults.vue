<template>
  <featured-characters
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
    

    return {
      results,
      isSearching,
    }
  },
}
</script>