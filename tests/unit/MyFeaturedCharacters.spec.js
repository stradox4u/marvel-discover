import { mount } from '@vue/test-utils'

import MyFeaturedCharacters from '../../src/components/MyFeaturedCharacters.vue'
import CharacterCard from '../../src/components/UI/MyCharacterCard.vue'

const compProps = {
  featuredItems: {
    155238: {
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
  loadingData: false,
  title: 'Featured Characters'
}

test('renders the character card while loading is true', () => {
  const wrapper = mount(MyFeaturedCharacters, {
    props: compProps
  })
  expect(wrapper.props()).toContain({ title: 'FeaturedCharacters' })
})