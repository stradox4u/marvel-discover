<template>
  <div class="container mx-auto flex flex-col">
    <my-header>Marvel Discover</my-header>
    <my-search-bar></my-search-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/UI/MyHeader.vue'
import MySearchBar from './components/MySearchBar.vue'


import { provide } from 'vue'


  export default {
    components: {
      MyHeader,
      MySearchBar,
    },
    setup() {
      const marvelUrl = import.meta.env.VITE_MARVEL_URL
      const marvelKey = import.meta.env.VITE_MARVEL_KEY      

      provide('marvelUrl', marvelUrl)
      provide('marvelKey', marvelKey)
    },
  }
</script>

