import axios from 'axios'

export default {
	async fetchFeaturedCharacters(state, payload) {
		const randOffset = Math.floor((Math.random() * 2596) + 1)
		const marvelUrl = payload.marvelUrl
		const marvelKey = payload.marvelKey

		state.charactersLoading = true
		try {
			const response = await axios.get(marvelUrl + '/characters?limit=8&orderBy=modified&offset=' + randOffset + '&apikey=' + marvelKey)

			let charsReturned = response.data.data.results

			charsReturned.forEach(e => {
				e.imageLink = e.thumbnail.path + '/detail.' + e.thumbnail.extension
			})

			state.featuredCharacters = charsReturned
			state.charactersLoading = false
		} catch (error) {
			console.log(error.message)
			state.charactersLoading = false
		}
	},
	async fetchLatestComic(state, payload) {
		const marvelUrl = payload.marvelUrl
		const marvelKey = payload.marvelKey

		const relevantChar = state.featuredCharacters.find(el => el.id === parseInt(payload.id))

		if (payload.available === 0) {
			relevantChar.latestComic = { date: 'None yet!', name: 'Not available!' }
		} else {
			try {
				const response = await axios.get(marvelUrl + '/characters/' + payload.id + '/comics?orderBy=-onsaleDate&apikey=' + marvelKey)

				const date = response.data.data.results[0].dates

				const onSale = date.filter(el => el.type === 'onsaleDate')

				const onSaleDate = onSale[0].date.split('T')

				relevantChar.latestComic = { date: onSaleDate[0], name: response.data.data.results[0].title }
			} catch (error) {
				console.log(error)
			}
		}
	},
}