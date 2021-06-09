<template>
    <div class="col-span-1 bg-gray-200">
        <div class="relative">
            <div class="bg-black bg-opacity-80">
                <router-link :to="{name: 'character-detail', params: { charId: item.id}}">
                    <img :src="item.imageLink" :alt="item.name + 'image'" class="w-full h-auto object-cover">
                </router-link>
            </div>
            <div class="absolute bottom-0 left-0 bg-gray-500 bg-opacity-60 w-full">
                <h3 class="font-poppins font-semibold sm:text-lg text-base text-center text-white uppercase p-2">{{ item.name }}</h3>
                <p class="text-center text-gray-200">{{ truncateDescription(item.description) }}</p>
            </div>
        </div>
        <div class="w-full bg-mf-ruby flex flex-col items-center py-4 rounded-br-3xl">
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
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { useStore } from 'vuex'

import { ref, onMounted } from 'vue'


export default {
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    setup(props) {
        const store = useStore()
        
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
                latestComic.value = { date: 'None yet!' }
                fetchingLatestComic.value = false
            } else {
                axios.get(marvelUrl + '/characters/' + id + '/comics?orderBy=-onsaleDate&apikey=' + marvelKey)
                .then(response => {
                    const date = response.data.data.results[0].dates
                    const onSale = date.filter(el => el.type === 'onsaleDate')
                    const onSaleDate = onSale[0].date.split('T')
                    latestComic.value = { date: onSaleDate[0] }
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

        const marvelUrl = store.getters.getMarvelUrl
        const marvelKey = store.getters.getMarvelKey

        return {
            truncateDescription,
            latestComic,
            fetchingLatestComic,
        }
    },
}
</script>