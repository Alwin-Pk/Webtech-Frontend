import {mount} from '@vue/test-utils'
import GuestForm from '@/components/GuestForm'

describe('GuestForm Test', () => {
  it('Should expect to not show form by default', () => {
    // when
    const wrapper = mount(GuestForm)

    // then
    expect(wrapper.find('#guests-create-form').classes()).not.toContain('show')
  })
})
