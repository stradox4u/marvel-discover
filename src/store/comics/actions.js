export default {
	loadLatestComics({ dispatch, commit, getters, rootGetters }) {
		commit('fetchLatestComics',
			{
				marvelUrl: rootGetters.getMarvelUrl,
				marvelKey: rootGetters.getMarvelKey
			})
	}
}