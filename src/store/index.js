import { createStore } from 'vuex'

import characterModule from './characters/index.js'
import comicModule from './comics/index.js'

const store = createStore({
    modules: {
        character: characterModule,
        comic: comicModule,
    },
    state() {
        return {
            marvelUrl: import.meta.env.VITE_MARVEL_URL,
            marvelKey: import.meta.env.VITE_MARVEL_KEY,
        }
    },
    getters: {
        getMarvelUrl(state) {
            return state.marvelUrl
        },
        getMarvelKey(state) {
            return state.marvelKey
        }
    }
})

export default store