<template>
    <form @submit.prevent="runSearch" class="inline-flex space-x-0 mb-4">
        <input v-model="searchTerm" type="text" placeholder="Search for a character" class="flex-grow p-2 focus:outline-none border border-gray-300 rounded-l-md" />
        <input type="image" 
            :src="searchIcon" alt="Submit" class="flex-shrink h-12 bg-mf-cblue p-2 rounded-r-md cursor-pointer hover:bg-gray-400">
    </form>
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
            store.dispatch('search/runSearchQuery', { searchTerm: searchTerm.value })

            router.push({ name: 'search-results' })

            searchTerm.value = ''
        }

        return {
            searchTerm,
            searchIcon,
            runSearch,
        }
    },
}
</script>