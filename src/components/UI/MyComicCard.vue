<template>
  <div class="col-span-1 bg-gray-200 rounded-br-lg">
    <router-link :to="{name: 'comic-detail', params: { comId: comic.id}}">
      <img
        :src="comic.imageLink"
        :alt="comic.title + 'image'"
        class="w-full h-auto object-cover"
      />
    </router-link>
    <h3 class="font-poppins sm:text-lg text-base bg-mf-pumpkin p-2">
      {{ title }}
    </h3>
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
    const title = computed(() => {
			if(props.comic.title.length <= 22) {
				return props.comic.title
			} else {
				return props.comic.title.substring(0, 21) + ' ...'
			}
		})

    return {
      title,
    };
  },
}
</script>
