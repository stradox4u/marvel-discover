import axios from 'axios'

export default {
	async fetchFeaturedCharacters(state, payload) {
		const randOffset = Math.floor((Math.random() * 2600) + 1)
		const marvelUrl = payload.marvelUrl
		const marvelKey = payload.marvelKey

		state.charactersLoading = true
		try {
			const response = await axios.get(marvelUrl + '/characters?limit=4&orderBy=modified&offset=' + randOffset + '&apikey=' + marvelKey)

			let charsReturned = response.data.data.results

			charsReturned.forEach(e => {
				e.imageLink = e.thumbnail.path + '/standard_fantastic.' + e.thumbnail.extension
			})

			state.featuredCharacters = charsReturned
			state.charactersLoading = false
		} catch (error) {
			console.log(error.message)
			state.charactersLoading = false
		}
	}
}