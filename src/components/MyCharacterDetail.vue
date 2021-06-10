<template>
	{{ charDetails.latestComic.name }}
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'


export default {
  setup() {
    const route = useRoute()
		const store = useStore()

    const charDetails = computed(() => {
			const featured = store.getters['character/getFeaturedCharacters']

			return featured.find(el => el.id === parseInt(route.params.charId))
		})

		return {
			charDetails,
		}
  },
}
</script>
