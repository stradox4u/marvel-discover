import axios from 'axios'


export default {
  async runSearch(state, payload) {
    state.searchingState = true

    const response = await axios.get(payload.marvelUrl + '/characters?nameStartsWith=' + payload.searchTerm + '&limit=20&apikey=' + payload.marvelKey)

    state.searchResults = response.data.data.results

    state.searchingState = false
  }
}