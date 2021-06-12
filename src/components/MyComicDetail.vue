<template>
  <base-detail-card>
    <template #image>
      <div class="relative w-full sm:py-72 py-48">
        <img
          :src="comicDetail.imageLink"
          :alt="comicDetail.title + 'image'"
          class="w-full h-full absolute top-0 object-cover"
        />
      </div>
    </template>

    <template #header>
      <h3 class="font-poppins sm:text-lg text-base">{{ comicDetail.title }}</h3>
    </template>

    <template #longText>
      <span class="inline-flex space-x-2">
        <h4 class="font-montserrat font-semibold sm:text-sm text-xs">
          On Sale From:
        </h4>
        <p class="font-poppins sm:text-sm text-xs">{{ saleDate }}</p>
      </span>
      <span class="inline-flex space-x-2">
        <h4 class="font-montserrat font-semibold sm:text-sm text-xs">
          Final Order Cutoff:
        </h4>
        <p class="font-poppins sm:text-sm text-xs">{{ focDate }}</p>
      </span>
    </template>

    <template #details>
      <span class="inline-flex space-x-2">
        <h4 class="font-montserrat font-semibold sm:text-sm text-xs">Format:</h4>
        <p class="font-poppins sm:text-sm text-xs">{{ comicDetail.format }}</p>
      </span>
      <span class="inline-flex space-x-2">
        <h4 class="font-montserrat font-semibold sm:text-sm text-xs">
          Page Count:
        </h4>
        <p class="font-poppins sm:text-sm text-xs">{{ comicDetail.pageCount }}</p>
      </span>
    </template>
    <template #button>
      <a :href="purchaseLink">
        <base-button class="mt-4 bg-mf-pumpkin w-9/12 block">Buy Now</base-button>
      </a>
    </template>

    <template #halo>
				<h4 class="font-montserrat font-semibold ml-2 sm:text-sm text-xs text-gray-200">Creators:</h4>
				<div class="inline-flex flex-wrap">
					<p v-for="(creator, index) in creators" 
            :key="index" 
            class="font-poppins sm:text-sm text-xs m-2 text-gray-200"
            :class="{'border-l': index > 0, 'border-gray-700': index > 0, 'pl-2': index > 0 }"
            >
            {{ creator.name }}
          </p>
				</div>		
		</template>
  </base-detail-card>
</template>

<script>
import { computed, onBeforeMount } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import axios from 'axios'

import BaseDetailCard from "./UI/MyBaseDetailCard.vue"

export default {
  components: {
    BaseDetailCard,
  },
  setup() {
    const store = useStore()
    const route = useRoute()

    const allComics = computed(() => {
      return store.getters["comic/getLatestComics"]
    })

    const comicDetail = computed(() => {
      return allComics.value.find((el) => el.id === parseInt(route.params.comId))
    })

    const saleDate = computed(() => {
      const date = comicDetail.value.dates.find(
        (el) => el.type === "onsaleDate"
      )
      return date.date.substring(0, date.date.indexOf("T"))
    })

    const focDate = computed(() => {
      const date = comicDetail.value.dates.find((el) => el.type === "focDate")
      return date.date.substring(0, date.date.indexOf("T"))
    })

    const creators = computed(() => {
      return comicDetail.value.creators.items.slice(0, 5)
    })

    const purchaseLink = computed(() => {
      const detailLink = comicDetail.value.urls.find(el => el.type === 'detail')
      return detailLink.url
    })

    return {
      comicDetail,
      saleDate,
      focDate,
      creators,
      purchaseLink,
    }
  },
}
</script>
