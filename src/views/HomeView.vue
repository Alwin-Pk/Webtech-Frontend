<template>
  <div class="home">
    <hr>
    <h1> Angebote des Monats</h1>
    <h2> Jeden Monat sparen - Drei Behandlungen zum vergünstigten Preis</h2>
    <hr>
    <div class="container" style="padding-bottom: 100px; padding-top: 50px">
      <div class="row row-cols-3" style="padding-left: 45px">
        <div class="col">
          <card angebot="Ganzkörpermassage" beschreibung="Erholen Sie sich vom Alltagsstress. 60 Minuten Ganzkörpermassage für Ihr Wohlbefinden"
                preis="65€" imgsource="https://www.float-stuttgart.de/public/uploads/plugins/webshop/productsimages/1157/deluxe-rueckenmassage_0_1511091256.jpg"
          card_id="card_1" old-price="75€"/>
        </div>
        <div class="col">
          <card card_id="card_2" angebot="Shellack Pediküre" beschreibung="Fußbad, Hornhautentfernung, Nagelhautentfernung,
        Nägel kürzen und feilen, Shellack auftragen." old-price="55€"
        preis="45€" imgsource="https://kosmetik-driller.de/wp-content/uploads/elementor/thumbs/OBF1800-odwwnk8lwat2dpyf4o0shlo07w0o8xhy9c575r8lxc.jpg"/>
        </div>
        <div class="col">
          <card card_id="card_3" angebot="Maniküre" beschreibung="Nagelbad, Hornhautentfernung, Nagelhautentfernung,
        Nägel kürzen und feilen, Nagellack auftragen." old-price="45€"
              preis="35€" imgsource="https://www.kosmetik-koje-carolinensiel.de/images/manikuere.jpg"/>
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
    <h2>Zuletzt gebucht:</h2>
    <p style="padding-bottom: 30px"/>
    <div class="col" v-for="guest in guests" :key="guest.id">
    <p>{{ guest.firstName }} hat eine  {{guest.lastName }}</p>
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
  text-align: center;
  padding-top: 35px;
}

h2 {
  padding-bottom: 30px;
  color: #e77a8c;
}

</style>
