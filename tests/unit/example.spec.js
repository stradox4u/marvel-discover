import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/UI/MyFooter.vue'

describe('MyFooter.vue', () => {
  it('renders correct message', () => {
    const msg = 'Data provided by Marvel'
    const wrapper = mount(Footer)
    expect(wrapper.html()).toContain(msg)
  })
})
