import { vi } from 'vitest'

export default {
  namespaced: true,
  state() {
    return {
      latestComics: {
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
      comicsLoading: false,
    }
  },
  actions: {
    loadLatestComics: vi.fn(),
  },
  getters: {
    getComicsLoadingState: vi.fn(),
    getLatestComics: vi.fn()
  },
  mutations: {
    fetchLatestComics: vi.fn()
  },
}