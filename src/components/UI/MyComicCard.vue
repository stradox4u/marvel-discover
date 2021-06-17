<template>
  <div class="col-span-1 bg-gray-200 rounded-br-lg h-full flex flex-col space-y-0 justify-items-stretch">
    <!-- Image -->
    <router-link :to="{name: 'comic-detail', params: { comId: comic.id } }">
      <img
        :src="comic.imageLink"
        :alt="comic.title + 'image'"
        class="w-full h-auto object-cover"
      />
    </router-link>
    <h3 class="font-poppins sm:text-lg text-base bg-mf-ruby p-2 flex-grow">
      {{ title }}
    </h3>
    <!-- Buy button -->
    <router-link :to="{ name: 'comic-detail', params: { comId: comic.id } }">
        <base-button class="bg-mf-pumpkin w-full">Buy</base-button>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // Truncate string if too long
    const title = computed(() => {
			if(props.comic.title.length <= 15) {
				return props.comic.title
			} else {
				return props.comic.title.substring(0, 14) + ' ...'
			}
		})

    return {
      title,
    };
  },
}
</script>
