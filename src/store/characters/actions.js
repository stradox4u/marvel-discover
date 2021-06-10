export default {
    loadFeaturedCharacters({ dispatch, commit, getters, rootGetters }) {
        commit('fetchFeaturedCharacters',
            {
                marvelUrl: rootGetters.getMarvelUrl,
                marvelKey: rootGetters.getMarvelKey
            })
    },
    loadLatestComic({ dispatch, commit, getters, rootGetters }, payload) {
        commit('fetchLatestComic', {
            ...payload,
            marvelUrl: rootGetters.getMarvelUrl,
            marvelKey: rootGetters.getMarvelKey,
        })
    },
}