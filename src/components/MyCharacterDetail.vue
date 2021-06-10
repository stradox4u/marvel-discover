<template>
	<base-detail-card>
		<template #image>
			<img :src="charDetails.imageLink" :alt="charDetails.name + 'image'" class="w-full h-auto object-cover">
		</template>

		<template #header>
			<h3 class="font-poppins sm:text-lg text-base">{{ charDetails.name }}</h3>
		</template>

		<template #longText>
				<h4 class="font-montserrat font-semibold sm:text-sm text-xs">Description:</h4>
				<p class="font-poppins sm:text-sm text-xs">{{ description }}</p>
		</template>

		<template #details>
				<h4 class="font-montserrat font-semibold sm:text-base text-sm">Latest Comic:</h4>
				<p class="font-poppins sm:text-sm text-xs"><strong>Name:</strong>&nbsp;{{ charDetails.latestComic.name }}</p>
				<p class="font-poppins sm:text-sm text-xs"><strong>Date:</strong>&nbsp;{{ charDetails.latestComic.date }}</p>
		</template>

		<template #halo>
				<h4 class="font-montserrat font-semibold sm:text-sm text-xs text-gray-200">Events:</h4>
				<div class="inline-flex flex-wrap">
					<p v-for="(event, index) in events" :key="index" class="font-poppins sm:text-sm text-xs m-2 text-gray-200" :class="{'border-l': index > 0, 'border-gray-700': index > 0, 'pl-2': index > 0 }">{{ event }}</p>
				</div>		
		</template>
	</base-detail-card>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import BaseDetailCard from './UI/MyBaseDetailCard.vue'


export default {
	components: {
		BaseDetailCard,
	},
  setup() {
    const route = useRoute()
		const store = useStore()

    const charDetails = computed(() => {
			const featured = store.getters['character/getFeaturedCharacters']

			return featured.find(el => el.id === parseInt(route.params.charId))
		})

		const description = computed(() => {
			if(charDetails.value.description === "") {
				return 'No description provided!'
			} else {
				return charDetails.value.description
			}
		})

		const events = computed(() => {
			if(charDetails.value.events.available === 0) {
				return ['No events yet!']
			} else {
				return charDetails.value.events.items.map(el => el.name)
			}
		})

		return {
			charDetails,
			description,
			events
		}
  },
}
</script>
