export default {
  namespaced: true,
  state() {
    return {
      featuredCharacters: [
        {
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
        {
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
      ],
      charactersLoading: false,
    }
  },
  actions: {
    loadFeaturedCharacters: jest.fn(),
    loadLatestComic: jest.fn()
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
    fetchFeaturedCharacters: jest.fn(),
    fetchLatestComic: jest.fn()
  },
}