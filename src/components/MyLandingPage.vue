<template>
  <featured-characters
    :featuredItems="featuredCharacters"
    :loadingData="charactersLoading"
  ></featured-characters>
  <featured-comics
    :featuredComics="latestComics"
    :loadingComics="comicsLoading"
  ></featured-comics>
</template>

<script>
import FeaturedCharacters from "./MyFeaturedCharacters.vue";
import FeaturedComics from "./MyFeaturedComics.vue"

import axios from "axios"

import { onMounted, watch, computed } from "vue"
import { useStore } from "vuex"

export default {
  components: {
    FeaturedCharacters,
    FeaturedComics,
  },
  setup() {
    const store = useStore();

    const characters = computed(() => {
      return store.getters['character/getFeaturedCharacters']
    })


    onMounted(() => {
      fetchFeaturedCharacters()
      fetchLatestComics()
    })

    const charactersLoading = computed(() => {
      return store.getters['character/getCharactersLoadingState']
    })

    const fetchFeaturedCharacters = () => {
      store.dispatch('character/loadFeaturedCharacters')
    }

    watch(characters, (newVal) => {
      if (Object.keys(newVal).length < 4) {
        fetchFeaturedCharacters()
      }
    })

    const latestComics = computed(() => {
      return store.getters['comic/getLatestComics']
    })

    const comicsLoading = computed(() => {
      return store.getters['comic/getComicsLoadingState']
    })

    const fetchLatestComics = () => {
      store.dispatch('comic/loadLatestComics')
    };

    return {
      featuredCharacters: characters,
      latestComics,
      charactersLoading,
      comicsLoading,
    };
  },
};
</script>
