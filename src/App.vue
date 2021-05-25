<template>
  <div class="container mx-auto flex flex-col">
    <my-header>Marvel Discover</my-header>
    <my-search-bar></my-search-bar>
    <featured-characters :featuredItems="featuredCharacters"></featured-characters>
    <featured-comics :featuredComics="latestComics"></featured-comics>
  </div>
</template>

<script>
import MyHeader from './components/UI/MyHeader.vue'
import MySearchBar from './components/MySearchBar.vue'
import FeaturedCharacters from './components/MyFeaturedCharacters.vue'
import FeaturedComics from './components/MyFeaturedComics.vue'

import axios from 'axios'

import { onMounted, ref, watch, provide } from 'vue'


  export default {
    components: {
      MyHeader,
      MySearchBar,
      FeaturedCharacters,
      FeaturedComics,
    },
    setup() {
      const marvelUrl = import.meta.env.VITE_MARVEL_URL
      const marvelKey = import.meta.env.VITE_MARVEL_KEY
      const characters = ref({})

      onMounted(() => {
        fetchFeaturedCharacters()
        fetchLatestComics()
        
      })

      const fetchFeaturedCharacters = () => {
        const randOffset = Math.floor((Math.random() * 2600) + 1)

        axios.get(marvelUrl + '/characters?limit=4&orderBy=modified&offset=' + randOffset + '&apikey=' + marvelKey)
          .then(response => {
            characters.value = response.data.data.results
            characters.value.forEach(e => {
              e.imageLink = e.thumbnail.path + '/standard_fantastic.' + e.thumbnail.extension
            })
            console.log(characters.value)
          })
          .catch(error => {
            console.log(error.message)
          })
      }

      watch(characters, (newVal) => {
        if(Object.keys(newVal).length < 4) {
          fetchFeaturedCharacters()
        }
      })

      const latestComics = ref({})

      const fetchLatestComics = () => {
        const today = new Date(Date.now()).toISOString()
        const date = new Date()
        const aMonthBack = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()).toISOString()
        axios.get(marvelUrl + '/comics?orderBy=-onsaleDate&dateRange=' + aMonthBack + ',' + today + '&limit=4&apikey=' + marvelKey)
          .then(response => {
            latestComics.value = response.data.data.results

            latestComics.value.forEach(e => {
              e.imageLink = e.thumbnail.path + '/standard_fantastic.' + e.thumbnail.extension
            })
            console.log(latestComics.value)
          })
          .catch(error => {
            console.log(error)
          })
      }

      provide('marvelUrl', marvelUrl)
      provide('marvelKey', marvelKey)
      
      return {
        featuredCharacters: characters,
        latestComics,
        marvelUrl,
        marvelKey,
      }
    },
  }
</script>

