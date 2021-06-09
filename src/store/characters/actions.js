export default {
    loadFeaturedCharacters({ dispatch, commit, getters, rootGetters }) {
        commit('fetchFeaturedCharacters',
            {
                marvelUrl: rootGetters.getMarvelUrl,
                marvelKey: rootGetters.getMarvelKey
            })
    }
}