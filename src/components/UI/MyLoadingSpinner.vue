<template>
    <div class="flex flex-row justify-between items-center mx-auto space-x-4">
        <h4 class="font-montserrat sm:text-sm text-xs">Loading</h4>
        <img :src="loadingSpinner" alt="loading spinner" class="w-8 animate-spin">
    </div>
</template>


<script>
import spinner from '../../assets/loading-icon.png'


export default {
    setup() {
        const loadingSpinner = spinner


        return {
            loadingSpinner
        }
    },
}
</script>