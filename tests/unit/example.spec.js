import { shallowMount } from '@vue/test-utils'
import card from '@/components/card';

describe('card.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = ''
    const wrapper = shallowMount(card, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
