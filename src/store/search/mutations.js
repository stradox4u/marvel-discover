import axios from 'axios'


export default {
  async runSearch(state, payload) {
    state.searchingState = true

    const response = await axios.get(payload.marvelUrl + '/characters?nameStartsWith=' + payload.searchTerm + '&limit=20&apikey=' + payload.marvelKey)

    let searchResults = response.data.data.results

    searchResults.forEach(e => {
      e.imageLink = e.thumbnail.path + '/detail.' + e.thumbnail.extension
    })

    state.searchResults = searchResults

    state.searchingState = false

    if (state.searchResults.length === 0) {
      state.noResultsFound = true
    } else {
      state.noResultsFound = false
    }
  },
  async fetchLatestComic(state, payload) {
    const marvelUrl = payload.marvelUrl
    const marvelKey = payload.marvelKey

    const relevantChar = state.searchResults.find(el => el.id === parseInt(payload.id))
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