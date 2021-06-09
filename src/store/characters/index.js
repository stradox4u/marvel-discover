import characterActions from './actions.js'
import characterGetters from './getters.js'
import characterMutations from './mutations.js'

export default {
    namespaced: true,
    state() {
        return {
            featuredCharacters: {},
            charactersLoading: false,
        }
    },
    actions: characterActions,
    getters: characterGetters,
    mutations: characterMutations,
}