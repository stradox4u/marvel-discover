<template>
    Character Details go here!!!
</template>

<script>
import { ref, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'

import axios from 'axios'


export default {
    setup() {
        const route = useRoute()

        const charDetails = ref({})

        onMounted(() => {
            const id = route.params.charId
            axios.get(marvelUrl + '/characters/' + id + '?apikey=' + marvelKey)
                .then(response => {
                    charDetails.value = response.data.data.results[0]
                    console.log(charDetails.value)
                })
                .catch(error => {
                    console.log(error)
                })
        })

        const marvelUrl = inject('marvelUrl')
        const marvelKey = inject('marvelKey')
    },
    
}
</script>