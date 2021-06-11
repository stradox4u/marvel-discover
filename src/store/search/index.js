import searchActions from './actions.js'
import searchGetters from './getters.js'
import searchMutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      searchResults: {},
      searchingState: false,
      noResultsFound: false,
    }
  },
  actions: searchActions,
  getters: searchGetters,
  mutations: searchMutations,
}