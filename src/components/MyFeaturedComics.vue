<template>
  <h2 class="font-montserrat sm:text-lg text-sm uppercase font-semibold mt-6">
    Latest Comics
  </h2>
  <ul
    v-if="!loadingComics"
    class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
  >
    <comic-card
      v-for="comic in featuredComics"
      :key="comic.id"
      :comic="comic"
      class="transform hover:scale-105 my-auto"
    ></comic-card>
  </ul>
  <div v-else class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
    <comic-skeleton v-for="num in 8" :key="num"></comic-skeleton>
  </div>
</template>

<script>
import ComicCard from "./UI/MyComicCard.vue"
import ComicSkeleton from './UI/MyComicSkeletonLoader.vue'

export default {
  components: {
    ComicCard,
    ComicSkeleton,
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
