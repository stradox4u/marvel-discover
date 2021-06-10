<template>
  <h2 class="font-montserrat sm:text-lg text-sm uppercase font-semibold mt-6">
    Latest Comics
  </h2>
  <ul
    v-if="!loadingComics"
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
  >
    <comic-card
      v-for="comic in featuredComics"
      :key="comic.id"
      :comic="comic"
      class="transform hover:scale-105"
    ></comic-card>
  </ul>
  <loading-spinner v-else></loading-spinner>
</template>

<script>
import ComicCard from "./MyComicCard.vue"

export default {
  components: {
    ComicCard,
  },
  props: {
    featuredComics: {
      type: Object,
      required: true,
    },
    loadingComics: {
      type: Boolean,
      required: true,
    },
  },
  setup() {},
}
</script>
