<template>
    <div class="col-span-1">
        <div class="relative">
            <!-- Image -->
            <div class="bg-black bg-opacity-80">
                <router-link :to="{name: 'character-detail', params: { charId: item.id}}"
                    class="relative py-48 block"
                >
                    <img :src="item.imageLink" :alt="item.name + 'image'" class="w-full h-full absolute top-0 object-cover">
                </router-link>
            </div>
            <!-- Description -->
            <div class="absolute bottom-0 left-0 bg-gray-500 bg-opacity-60 w-full">
                <h3 class="font-poppins font-semibold sm:text-lg text-base text-center text-white uppercase p-2">{{ item.name }}</h3>
                <p class="text-center text-gray-200">{{ truncateDescription(item.description) }}</p>
            </div>
        </div>
        <!-- Appearances -->
        <div class="w-full bg-mf-ruby flex flex-col items-center py-4">
            <h3 class="font-poppins sm:text-lg text-base p-2 uppercase text-center">Comics Appearances:</h3>
            <div class="flex flex-row justify-between w-full">
                <span class="flex flex-col space-y-2 items-center px-2 border-r border-white w-full">
                    <p class="font-poppins sm:text-base text-sm text-gray-200">Count</p>
                    <p class="font-poppins sm:text-base text-sm font-semibold text-white">{{ item.comics.available }}</p>
                </span>
                <span class="flex flex-col space-y-2 items-center px-2 w-full">
                    <p class="font-poppins sm:text-base text-sm text-gray-200">Latest</p>
                    <p v-if="!fetchingLatestComic" class="font-poppins sm:text-base text-sm font-semibold text-white">{{ latestComic.date }}</p>
                    <loading-spinner v-else></loading-spinner>
                </span>
            </div>
            <!-- Details Button -->
            <router-link :to="{ name: 'character-detail', params: { charId: item.id } }"
                class="mt-4 w-9/12"
            >
                <base-button class="bg-mf-pumpkin w-full">Learn More</base-button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref, onMounted, computed, watch } from 'vue'


export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        currRoute: {
            type: String,
            required: true,
        }
    },
    setup(props) {
        const store = useStore()
        
        const truncateDescription = (str) => {
            if(str.length === 0) {
                return 'No supplied description ...'
            } else if(str.length > 50) {
                return str.substring(0, 72) + ' ...'
            } else if(str === null) {
                return 'No description available ...'
            } else {
                return str
            }
        }
        
        const route = useRoute()

        // Fetch current characters from store
        const curChars = computed(() => {
            if(props.currRoute === 'landing') {
                return store.getters['character/getFeaturedCharacters']
            } else if(props.currRoute === 'searching') {
                return store.getters['search/getSearchResults']
            }
        })

        // Process the latest comic
        const latestComic = computed(() => {
            const relevantChar = curChars.value.find(el => el.id == props.item.id)

            if(!relevantChar.latestComic) {
                return { date: null }
            } else {
                return relevantChar.latestComic
            }
            
        })
        const fetchingLatestComic = ref(false)

        // Fetch the latest comic for this character
        const fetchLatestComic = () => {
            const id = props.item.id

            fetchingLatestComic.value = true

            if(route.name === 'search-results') {
                store.dispatch('search/loadLatestComic', { id: id, available: props.item.comics.available })
            } else {
                store.dispatch('character/loadLatestComic', { id: id, available: props.item.comics.available })
            }
        }

        // Process the variable for showing the loading spinner
        watch(latestComic, (newVal) => {
            if(newVal) {
                if(newVal.value !== null) {
                    fetchingLatestComic.value = false
                }
            }
        })

        // Only load the latest comic if there's none in the store
        onMounted(() => {
            if(!Object.keys(props.item).includes('latestComic')) {
                fetchLatestComic()
            }
        })

        return {
            truncateDescription,
            latestComic,
            fetchingLatestComic,
        }
    },
}
</script>