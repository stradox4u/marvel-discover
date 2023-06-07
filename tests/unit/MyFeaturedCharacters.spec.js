import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import store from '../../src/store/testingStore.js'
import FeaturedCharacters from '../../src/components/MyFeaturedCharacters.vue'
import Skeleton from '../../src/components/UI/MyCharacterSkeletonLoader.vue'
import CharacterCard from '../../src/components/UI/MyCharacterCard.vue'

const compProps = {
  featuredItems: [
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
  loadingData: false,
  title: 'Featured Characters'
}

test('heading shows up correctly', () => {
  const wrapper = mount(FeaturedCharacters, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  expect(wrapper.props().title).toEqual('Featured Characters')
})

test('skeleton loader shows up while loading', async () => {
  const wrapper = mount(FeaturedCharacters, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  await wrapper.setProps({ loadingData: true })
  expect(wrapper.findComponent(Skeleton)).toBeTruthy()
})

test('character card shows up after loading is complete', async () => {
  const wrapper = mount(FeaturedCharacters, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  await wrapper.setProps({ loadingData: false })
  expect(wrapper.findComponent(CharacterCard)).toBeTruthy()
})