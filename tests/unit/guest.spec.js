import {mount} from '@vue/test-utils'
import Card from '@/components/Card.vue'
import HomeView from '@/views/HomeView'
import App from '@/App.vue'
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import GuestForm from '@/components/GuestForm'

describe('Component Test', () => {
  it('Should expect component Card to be present', () => {
    // when
    const wrapper = mount(HomeView)

    // then
    const card = wrapper.findComponent(Card)
    expect(card.exists()).toBeTruthy()
  })

  it('Should expect component Navbar to be present', () => {
    // when
    const wrapper = mount(App)

    // then
    const navbar = wrapper.findComponent(Navbar)
    expect(navbar.exists()).toBeTruthy()
  })

  it('Should expect component Carousel to be present', () => {
    // when
    const wrapper = mount(App)

    // then
    const carousel = wrapper.findComponent(Carousel)
    expect(carousel.exists()).toBeTruthy()
  })

  it('Should expect component GuestForm to be present', () => {
    // when
    const wrapper = mount(Card)

    // then
    const guestForm = wrapper.findComponent(GuestForm)
    expect(guestForm.exists()).toBeTruthy()
  })
})
