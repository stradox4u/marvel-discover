<template>
    <h2 class="font-montserrat sm:text-lg text-sm uppercase font-semibold">Featured Comics</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <comic-card v-for="comic in featuredComics" :key="comic.id" :comic="comic" class="transform hover:scale-105"></comic-card>
    </ul>
</template>


<script>
import ComicCard from './MyComicCard.vue'


export default {
    components: {
        ComicCard,
    },
    props: {
        featuredComics: {
            type: Object,
            required: true,
        }
    },
    setup() {
        
    },
}
</script>