<template>
  <div class="home">
    <h1> Angebote des Monats </h1>
  <div class="container" style="padding-bottom: 100px">
    <div class="row row-cols-3" style="padding-left: 45px">
      <div class="col">
        <card angebot="Mandelsäure Peeling" beschreibung="Gegen unreine Haut, Akne, großporige Haut, Pigmentverfärbungen,
        Falten, Straffheitsverlust"
              preis="80€"/>
      </div>
      <div class="col">
        <card angebot="Shellack Pediküre" beschreibung="Fußbad, Hornhautentfernung, Nagelhautentfernung,
      Nägel kürzen und feilen, Shellack auftragen."
      preis="45€"/>
      </div>
      <div class="col">
        <card angebot="Maniküre" beschreibung="Nagelbad, Hornhautentfernung, Nagelhautentfernung,
      Nägel kürzen und feilen, Nagellack auftragen."
            preis="35€"/>
      </div>
    </div>
      <p style="padding: 20px"></p>
    <div class="row row-cols-3">
      <div class="col"></div>
      <div class="col">
        <div class="card-body" style="padding-left: 0px">
          <h5 class="card-title">Weitere Angebote finden sie auf der Treatwell Plattform</h5>
          <p></p>
          <a target="_blank" rel="noopener noreferrer" href="https://buchung.treatwell.de/ort/passion-kosmetik-salon/" class="btn btn-primary">Zu den Angeboten</a>
        </div>
      </div>
    </div>
  </div>
    <h2>Folgende Personen haben bereits bei uns Termine gebucht:</h2>
    <p style="padding-bottom: 30px"/>
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
