export default {
  runSearchQuery({ dispatch, commit, getters, rootGetters }, payload) {
    commit('runSearch',
      {
        ...payload,
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