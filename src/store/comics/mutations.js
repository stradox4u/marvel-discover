import axios from "axios"

export default {
	async fetchLatestComics(state, payload) {
		const today = new Date(Date.now()).toISOString()
		const date = new Date()
		const aMonthBack = new Date(
			date.getFullYear(),
			date.getMonth() - 1,
			date.getDate()
		).toISOString()

		const marvelUrl = payload.marvelUrl
		const marvelKey = payload.marvelKey

		state.comicsLoading = true

		try {
			const response = await axios.get(marvelUrl + "/comics?orderBy=-onsaleDate&dateRange=" +
				aMonthBack + "," + today + "&limit=8&apikey=" + marvelKey)

			let comicResults = response.data.data.results

			comicResults.forEach((e) => {
				e.imageLink =
					e.thumbnail.path + "/detail." + e.thumbnail.extension
			})
			state.latestComics = comicResults
			state.comicsLoading = false
		} catch (error) {
			console.log(error)
			state.comicsLoading = false
		}
	}
}