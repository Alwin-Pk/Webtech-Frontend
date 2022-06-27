<template>
  <div class="home">
    <h1> Unsere Angebote des Monats </h1>
  <div class="container" style="padding-top: 100px">
    <div class="row row-cols-3">
      <div class="col">
      </div>
      <div class="col"><card></card></div>
    </div>
  </div>
    <h2>Folgende Personen haben bereits bei uns Termine gebucht:</h2>
    <p></p>
    <div class="col" v-for="guest in guests" :key="guest.id">
    <p>{{ guest.firstName }} {{guest.lastName }}</p>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import card from '@/components/card'
import carousel from '@/components/carousel'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    carousel,
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    card
  },
  data () {
    return {
      guests: []
    }
  },
  mounted () {
    const endUrl = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/guests'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endUrl, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(guest => {
        this.guests.push(guest)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style>

h1
{
  font-family: "Avenir Next";
}

</style>
