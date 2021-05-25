<template>
    <div class="col-span-1 bg-gray-200 rounded-br-lg">
        <h3 class="font-poppins sm:text-lg text-base bg-blue-400 p-2">{{ item.name }}</h3>
        <img :src="item.imageLink" :alt="item.name + 'image'" class="w-full h-auto object-cover">
        <p>{{ truncateDescription(item.description) }}</p>
        <h3 class="font-poppins sm:text-lg text-base p-2">Comics Appearances:</h3>
        <p class="font-poppins sm:text-base text-sm p-2">Count: {{ item.comics.available }}</p>
        <p v-if="!fetchingLatestComic" class="font-poppins sm:text-base text-sm p-2">Latest: {{ latestComic.title }}</p>
        <loading-spinner v-else></loading-spinner>
    </div>
</template>

<script>
import axios from 'axios'

import { ref, onMounted, inject } from 'vue'


export default {
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    setup(props) {
        const truncateDescription = (str) => {
            if(str.length === 0) {
                return 'No supplied description ...'
            } else if(str.length > 50) {
                return str.substring(0, 72) + ' ...'
            } else if(str === NULL) {
                return 'No description available ...'
            } else {
                return str
            }
        }

        const latestComic = ref({})

        const fetchingLatestComic = ref(false)

        const fetchLatestComic = () => {
            const id = props.item.id

            fetchingLatestComic.value = true

            if(props.item.comics.available === 0) {
                latestComic.value = { title: 'No appearances yet!' }
                fetchingLatestComic.value = false
            } else {
                axios.get(marvelUrl + '/characters/' + id + '/comics?orderBy=-onsaleDate&apikey=' + marvelKey)
                .then(response => {
                    latestComic.value = response.data.data.results[0]
                    fetchingLatestComic.value = false
                })
                .catch(error => {
                    console.log(error)
                    fetchingLatestComic.value = false
                })
            }
        }

        onMounted(() => {
            fetchLatestComic()
        })

        const marvelUrl = inject('marvelUrl')
        const marvelKey = inject('marvelKey')

        return {
            truncateDescription,
            latestComic,
            fetchingLatestComic,
        }
    },
}
</script>