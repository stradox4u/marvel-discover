<template>
    <div class="col-span-1 bg-gray-200 rounded-br-lg">
        <h3 class="font-poppins sm:text-lg text-base bg-blue-400 p-2">{{ item.name }}</h3>
        <img :src="item.imageLink" :alt="item.name + 'image'" class="w-full h-auto object-cover">
        <p>{{ truncateDescription(item.description) }}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    setup() {
        const truncateDescription = (str) => {
            if(str.length === 0) {
                return 'No supplied description ...'
            } else if(str.length > 50) {
                return str.substring(0, 72) + ' ...'
            } else if(str === NULL) {
                return 'No description available ...'
            } else {
                return str
            }
        }

        return {
            truncateDescription,
        }
    },
}
</script>