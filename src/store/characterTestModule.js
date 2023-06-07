import { vi } from 'vitest'

export default {
  namespaced: true,
  state() {
    return {
      featuredCharacters: [
        {
          id: 35423534,
          name: 'Sam Dawson',
          imageLink: 'https://unsplash.com/photos/oX-F7F8UD6s',
          description: '',
          comics: {
            available: 8
          },
          events: {
            available: 0,
          },
          latestComic: {
            date: '2020-08-21'
          }
        },
        {
          id: 35423535,
          name: 'Peter Parker',
          imageLink: 'https://unsplash.com/photos/oX-F7F8UD6s',
          description: 'Peter is a superhero. Need I say more?',
          comics: {
            available: 6
          },
          events: {
            available: 3,
            items: [
              { name: 'Infinity war' }
            ]
          },
          latestComic: {
            date: '2020-08-21'
          }
        }
      ],
      charactersLoading: false,
    }
  },
  actions: {
    loadFeaturedCharacters: vi.fn(),
    loadLatestComic: vi.fn()
  },
  getters: {
    getFeaturedCharacters: (state) => {
      return state.featuredCharacters
    },
    getCharactersLoadingState: (state) => {
      return state.charactersLoading
    }
  },
  mutations: {
    fetchFeaturedCharacters: vi.fn(),
    fetchLatestComic: vi.fn()
  },
}