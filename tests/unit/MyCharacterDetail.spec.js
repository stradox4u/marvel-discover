import { mount } from "@vue/test-utils"
import { expect, test, vi } from "vitest"
import { useRoute } from "vue-router"

import store from '../../src/store/testingStore.js'
import CharacterDetail from '../../src/components/MyCharacterDetail.vue'

vi.mock('vue-router')

test('name shows up correctly', () => {
  useRoute.mockReturnValueOnce({
    params: {
      charId: 35423535
    }
  })
  const wrapper = mount(CharacterDetail, {
    global: {
      plugins: [store],
    },
  })

  expect(wrapper.html()).toContain('Peter Parker')
})

test('description shows up if present', () => {
  useRoute.mockReturnValueOnce({
    params: {
      charId: 35423535
    }
  })
  const wrapper = mount(CharacterDetail, {
    global: {
      plugins: [store],
    },
  })

  expect(wrapper.html()).toContain('Peter is a superhero. Need I say more?')
})

test('description placeholder shows up correctly', () => {
  useRoute.mockReturnValueOnce({
    params: {
      charId: 35423534
    }
  })
  const wrapper = mount(CharacterDetail, {
    global: {
      plugins: [store],
    },
  })

  expect(wrapper.html()).toContain('No description provided!')
})

test('description placeholder shows up correctly', () => {
  useRoute.mockReturnValueOnce({
    params: {
      charId: 35423534
    }
  })
  const wrapper = mount(CharacterDetail, {
    global: {
      plugins: [store],
    },
  })

  expect(wrapper.html()).toContain('No events yet!')
})