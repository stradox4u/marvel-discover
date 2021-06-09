import comicsActions from './actions.js'
import comicsGetters from './getters.js'
import comicsMutations from './mutations.js'

export default {
    namespaced: true,
    state() {
        return {
            latestComics: {},
            comicsLoading: false,
        }
    },
    actions: comicsActions,
    getters: comicsGetters,
    mutations: comicsMutations,
}