<template>
    <h2 class="font-montserrat sm:text-lg text-sm uppercase font-semibold">Featured Characters</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <character-card v-for="item in featuredItems" :key="item.id" :item="item" class="transform hover:scale-105"></character-card>
    </ul>
</template>


<script>
import CharacterCard from './UI/MyCharacterCard.vue'


export default {
    components: {
        CharacterCard,
    },
    props: {
        featuredItems: {
            type: Object,
            required: true
        },
    },
    setup() {
        
    },
}
</script>