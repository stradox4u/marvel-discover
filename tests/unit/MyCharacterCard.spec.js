import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import store from '../../src/store/testingStore.js'
import CharacterCard from '../../src/components/UI/MyCharacterCard.vue'

const compProps = {
  item: {
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
  currRoute: 'landing'
}

test('receives current route prop correctly', () => {
  const wrapper = mount(CharacterCard, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  expect(wrapper.props().currRoute).toEqual('landing')
})

test('receives name prop correctly', () => {
  const wrapper = mount(CharacterCard, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  expect(wrapper.html()).toContain('Sam Dawson')
})

test('receives latest comic date prop correctly', () => {
  const wrapper = mount(CharacterCard, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  expect(wrapper.html()).toContain('2020-08-21')
})

test('receives imageLink prop correctly', () => {
  const wrapper = mount(CharacterCard, {
    props: compProps,
    global: {
      plugins: [store]
    }
  })
  const image = wrapper.find('img')
  expect(image.attributes('src')).toBe('https://unsplash.com/photos/oX-F7F8UD6s')
})