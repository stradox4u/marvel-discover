<template>
  <div class="container mx-auto flex flex-col">
    <my-header>Marvel Discover</my-header>
    <my-search-bar></my-search-bar>
  </div>
</template>

<script>
import MyHeader from './components/UI/MyHeader.vue'
import MySearchBar from './components/MySearchBar.vue'

import axios from 'axios'

import { onMounted, ref } from 'vue'


  export default {
    components: {
      MyHeader,
      MySearchBar,
    },
    setup() {
      const marvelUrl = import.meta.env.VITE_MARVEL_URL
      const marvelKey = import.meta.env.VITE_MARVEL_KEY
      const characters = ref(null)

      onMounted(() => {
        axios.get(marvelUrl + '/characters?limit=40&apikey=' + marvelKey)
          .then(response => {
            characters.value = response.data.data.results
            console.log(characters.value)
          })
          .catch(error => {
            console.log(error.message)
          })
      })
      return {

      }
    }
  }
</script>

