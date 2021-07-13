import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

import MyCharacterCard from '../../src/components/UI/MyCharacterCard'
import CharacterModule from '../../src/store/characters/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('MyCharacterCard.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      featuredCharacters: [
        {
          name: 'Sam Dawson',
          id: '0003452',
          imageLink: 'https://image.image.com',
          description: 'This is a superhero. Need ye more?',
          comics: {
            available: 5
          }
        }
      ]
    }
    actions = {
      loadFeaturedCharacters: jest.fn(),
      loadLatestComic: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        CharacterModule: {
          state,
          actions,
          getters: CharacterModule.getters,
          namespaced: true
        }
      }
    })
  })
  it('calls store action loadLatestComic on mount', () => {
    const wrapper = mount(MyCharacterCard, { store, localVue })
    expect(actions.loadLatestComic).toHaveBeenCalled()
  })
})
