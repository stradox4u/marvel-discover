<template>
    <div class="inline-flex space-x-0 mb-4">
        <input v-model="searchTerm" type="text" placeholder="Search for a character" class="flex-grow p-2 focus:outline-none border border-gray-300 rounded-l-md" />
        <img @click="runSearch" 
            :src="searchIcon" alt="search-icon" class="flex-shrink h-12 bg-mf-cblue p-2 rounded-r-md cursor-pointer hover:bg-gray-400">
    </div>
</template>

<script>
import SearchIcon from '../assets/search-svgrepo-com.svg'

import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'



export default {
    setup() {
        const searchTerm = ref('')
        const searchIcon = SearchIcon

        const store = useStore()
        const router = useRouter()

        const runSearch = () => {
            store.dispatch('search/runSearchQuery', { searchTerm })

            router.push({ name: 'search-results' })
        }

        return {
            searchTerm,
            searchIcon,
            runSearch
        }
    },
}
</script>