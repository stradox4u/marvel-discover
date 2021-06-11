<template>
  <featured-characters
    :featuredItems="featuredCharacters"
    :loadingData="charactersLoading"
    :title="'Featured Characters'"
  ></featured-characters>
  <featured-comics
    :featuredComics="latestComics"
    :loadingComics="comicsLoading"
  ></featured-comics>
</template>

<script>
import FeaturedCharacters from "./MyFeaturedCharacters.vue"
import FeaturedComics from "./MyFeaturedComics.vue"


import { watch, computed, onMounted } from "vue"
import { useStore } from "vuex"

export default {
  components: {
    FeaturedCharacters,
    FeaturedComics,
  },
  setup() {
    const store = useStore()

    const characters = computed(() => {
      return store.getters['character/getFeaturedCharacters']
    })

    const charactersLoading = computed(() => {
      return store.getters['character/getCharactersLoadingState']
    })

    watch(characters, (newVal) => {
      if (newVal.length < 8) {
        store.dispatch('character/loadFeaturedCharacters')
      }
    })

    const latestComics = computed(() => {
      return store.getters['comic/getLatestComics']
    })

    const comicsLoading = computed(() => {
      return store.getters['comic/getComicsLoadingState']
    })

    onMounted(() => {
      if(characters.value.length < 8) {
        store.dispatch('character/loadFeaturedCharacters')
      }
    })

    return {
      featuredCharacters: characters,
      latestComics,
      charactersLoading,
      comicsLoading,
    }
  },
}
</script>
