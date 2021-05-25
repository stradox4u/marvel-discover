<template>
    <div class="col-span-1 bg-gray-200 rounded-br-lg">
        <h3 class="font-poppins sm:text-lg text-base bg-blue-400 p-2">{{ comic.title }}</h3>
        <img :src="comic.imageLink" :alt="comic.title + 'image'" class="w-full h-auto object-cover">
        <h3 class="font-poppins sm:text-lg text-base p-2">Creators:</h3>
        <span class="flex flex-row flex-wrap gap-2 p-2">
            <p v-for="(creator, index) in comic.creators.items" :key="index" class="sm:text-sm text-xs">{{ creator.name }}</p>
        </span>
    </div>
</template>


<script>
export default {
    props: {
        comic: {
            type: Object,
            required: true,
        }
    },
    setup() {
        
    },
}
</script>