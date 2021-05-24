<template>
    <div class="inline-flex space-x-0 mb-4">
        <input v-model="searchTerm" type="text" placeholder="Search for a character" class="flex-grow p-2 focus:outline-none border border-gray-300 rounded-l-md" />
        <img :src="searchIcon" alt="search-icon" class="flex-shrink h-12 bg-gray-200 p-2 rounded-r-md cursor-pointer hover:bg-gray-400">
    </div>
</template>

<script>
import SearchIcon from '../assets/search-svgrepo-com.svg'

import { ref } from 'vue'



export default {
    setup() {
        const searchTerm = ref('')
        const searchIcon = SearchIcon

        return {
            searchTerm,
            searchIcon,
        }
    },
}
</script>