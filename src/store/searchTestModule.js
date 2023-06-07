import { vi } from 'vitest'

export default {
  namespaced: true,
  state() {
    return {
      searchResults: {
        35423534: {
          id: 35423534,
          name: 'Sam Dawson',
          imageLink: 'https://unsplash.com/photos/oX-F7F8UD6s',
          description: 'Sam is a superhero. Need I say more?',
          comics: {
            available: 8
          },
          latestComic: {
            date: '2020-08-21'
          }
        },
        155239: {
          id: 35423535,
          name: 'Peter Parker',
          imageLink: 'https://unsplash.com/photos/oX-F7F8UD6s',
          description: 'Peter is a superhero. Need I say more?',
          comics: {
            available: 6
          },
          latestComic: {
            date: '2020-08-21'
          }
        }
      },
      searchingState: false,
      noResultsFound: false,
    }
  },
  actions: {
    runSearchQuery: vi.fn(),
    loadLatestComic: vi.fn(),
  },
  getters: {
    getSearchingState: (state) => {
      return state.searchingState
    },
    getSearchResults: (state) => {
      return state.searchResults
    },
    getNoResultsFoundState: (state) => {
      return state.noResultsFound
    }
  },
  mutations: {
    runSearch: vi.fn(),
    fetchLatestComic: vi.fn()
  },
}