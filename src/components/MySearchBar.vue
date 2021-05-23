<template>
    <div class="inline-flex space-x-0">
        <input v-model="searchTerm" type="text" placeholder="Search your favourite hero!" class="flex-grow p-2 focus:outline-none border border-gray-300 rounded-l-md" />
        <img src="../assets/search-svgrepo-com.svg" alt="search-icon" class="flex-shrink h-12 bg-gray-200 p-2 rounded-r-md cursor-pointer hover:bg-gray-400">
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
    setup() {
        const searchTerm = ref('')

        return {
            searchTerm,
        }
    },
}
</script>