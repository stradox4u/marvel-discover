<template>
    <featured-characters :featuredItems="featuredCharacters" :loadingData="charactersLoading"></featured-characters>
    <featured-comics :featuredComics="latestComics" :loadingComics="comicsLoading"></featured-comics>
</template>


<script>
import FeaturedCharacters from './MyFeaturedCharacters.vue'
import FeaturedComics from './MyFeaturedComics.vue'

import axios from 'axios'

import { ref, onMounted, watch, inject } from 'vue'

export default {
    components: {
        FeaturedCharacters,
        FeaturedComics,
    },
    setup() {
        const characters = ref({})

      onMounted(() => {
        fetchFeaturedCharacters()
        fetchLatestComics()
        
      })

			const charactersLoading = ref(false)

      const fetchFeaturedCharacters = () => {
        const randOffset = Math.floor((Math.random() * 2600) + 1)

				charactersLoading.value = true

        axios.get(marvelUrl + '/characters?limit=4&orderBy=modified&offset=' + randOffset + '&apikey=' + marvelKey)
          .then(response => {
            characters.value = response.data.data.results
            characters.value.forEach(e => {
              e.imageLink = e.thumbnail.path + '/standard_fantastic.' + e.thumbnail.extension
            })
						charactersLoading.value = false
          })
          .catch(error => {
            console.log(error.message)
						charactersLoading.value = false
          })
      }

      watch(characters, (newVal) => {
        if(Object.keys(newVal).length < 4) {
          fetchFeaturedCharacters()
        }
      })

      const latestComics = ref({})

			const comicsLoading = ref(false)

      const fetchLatestComics = () => {
        const today = new Date(Date.now()).toISOString()
        const date = new Date()
        const aMonthBack = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()).toISOString()

				comicsLoading.value = true

        axios.get(marvelUrl + '/comics?orderBy=-onsaleDate&dateRange=' + aMonthBack + ',' + today + '&limit=4&apikey=' + marvelKey)
          .then(response => {
						latestComics.value = response.data.data.results

            latestComics.value.forEach(e => {
							e.imageLink = e.thumbnail.path + '/standard_fantastic.' + e.thumbnail.extension
            })
						comicsLoading.value = false
          })
          .catch(error => {
						console.log(error)
						comicsLoading.value = false
          })
      }

      const marvelUrl = inject('marvelUrl')
      const marvelKey = inject('marvelKey')

        return {
        featuredCharacters: characters,
        latestComics,
				charactersLoading,
				comicsLoading,
        }
    },
}
</script>