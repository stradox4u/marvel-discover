<template>
  <div class="container mx-auto flex flex-col">
    <my-header>Marvel Discover</my-header>
    <my-search-bar></my-search-bar>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/UI/MyHeader.vue'
import MySearchBar from './components/MySearchBar.vue'
import MyFooter from './components/UI/MyFooter.vue'


import { onMounted } from 'vue'
import { useStore } from 'vuex'


  export default {
    components: {
      MyHeader,
      MySearchBar,
      MyFooter,
    },
    setup() {
      const store = useStore()

      const fetchFeaturedCharacters = () => {
        store.dispatch('character/loadFeaturedCharacters')
      }

      const fetchLatestComics = () => {
        store.dispatch('comic/loadLatestComics')
      }

      onMounted(() => {
        fetchFeaturedCharacters()
        fetchLatestComics()
      })
    },
  }
</script>

