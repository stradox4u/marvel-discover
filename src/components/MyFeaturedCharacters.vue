<template>
    <h2 class="font-montserrat sm:text-lg text-sm uppercase font-semibold">{{ title }}</h2>
    <ul v-if="!loadingData" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <character-card v-for="item in featuredItems" :key="item.id"
            :currRoute="whichRoute"
            :item="item" class="transform hover:scale-105"
            >
        </character-card>
    </ul>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <character-skeleton v-for="num in 4" :key="num"></character-skeleton>
    </div>
</template>


<script>
import { computed } from 'vue'

import CharacterCard from './UI/MyCharacterCard.vue'
import CharacterSkeleton from './UI/MyCharacterSkeletonLoader.vue'


export default {
    components: {
        CharacterCard,
        CharacterSkeleton,
    },
    props: {
        featuredItems: {
            type: Object,
            required: true
        },
        loadingData: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const whichRoute = computed(() => {
            if(props.title === 'Featured Characters') {
                return 'landing'
            } else {
                return 'searching'
            }
        })

        return {
            whichRoute,
        }
    },
}
</script>