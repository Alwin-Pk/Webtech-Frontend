<template>
  <div class="home">
    <h1 class="pageHeader"> Angebote des Monats</h1>
    <h2> Jeden Monat sparen - Drei Behandlungen zum vergünstigten Preis</h2>
    <hr style="width: 80%;margin: auto;">
    <div class="container" style="padding-bottom: 60px; padding-top: 50px">
      <div class="row row-cols-3" style="padding-left: 45px">
        <div class="col">
          <card angebot="Ganzkörpermassage" beschreibung="Erholen Sie sich vom Alltagsstress. 60 Minuten Ganzkörpermassage für Ihr Wohlbefinden"
                preis="65€" imgsource="https://www.float-stuttgart.de/public/uploads/plugins/webshop/productsimages/1157/deluxe-rueckenmassage_0_1511091256.jpg"
          card_id="card_1" old-price="75€"/>
        </div>
        <div class="col">
          <card card_id="card_2" angebot="Maniküre" beschreibung="Nagelbad, Hornhautentfernung, Nagelhautentfernung,
        Nägel kürzen und feilen, Nagellack auftragen." old-price="45€"
              preis="35€" imgsource="https://www.kosmetik-koje-carolinensiel.de/images/manikuere.jpg"/>
        </div>
        <div class="col">
          <card card_id="card_3" angebot="Shellack Pediküre" beschreibung="Fußbad, Hornhautentfernung, Nagelhautentfernung,
        Nägel kürzen und feilen, Shellack auftragen." old-price="55€"
                preis="45€" imgsource="https://kosmetik-driller.de/wp-content/uploads/elementor/thumbs/OBF1800-odwwnk8lwat2dpyf4o0shlo07w0o8xhy9c575r8lxc.jpg"/>
        </div>
      </div>
        <p style="padding: 20px"></p>
       <hr style="width: 80%;margin: auto">
        <div class="col">
          <div class="card-body" style="padding-left: 0px">
            <h5 class="treatwell">Weitere Angebote können Sie<br> direkt auf Treatwell buchen</h5>
            <p></p>
            <a target="_blank" rel="noopener noreferrer" href="https://buchung.treatwell.de/ort/passion-kosmetik-salon/" class="btn btn-primary">Zu den Angeboten</a>
          </div>
        </div>
    </div>
<!--    <h2>Zuletzt gebucht:</h2>-->
<!--    <p/>-->
<!--    <div class="col" v-for="guest in guests" :key="guest.id">-->
<!--    <p>{{ guest.firstName }} hat eine Behandlung für den {{guest.date }} gebucht.</p>-->
<!--    </div>-->
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Card from '@/components/Card.vue'
import carousel from '@/components/Carousel.vue'
import GuestForm from '@/components/GuestForm.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    carousel,
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    Card,
    // eslint-disable-next-line vue/no-unused-components
    GuestForm
  }
  // data () {
  //   return {
  //     guests: []
  //   }
  // },
  // mounted () {
  //   const endUrl = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/guests'
  //   const requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   }
  //   fetch(endUrl, requestOptions)
  //     .then(response => response.json())
  //     .then(result => result.forEach(guest => {
  //       this.guests.push(guest)
  //     }))
  //     .catch(error => console.log('error', error))
  // }
}

</script>

<style scoped>

h1.pageHeader {
  font-family: "Avenir Next";
  text-align: center;
  padding-top: 50px;
}

h2 {
  padding-bottom: 30px;
  color: #e77a8c;
}

.treatwell {
  padding-top: 45px;
}

h5 {
  font-size: 26px;
}

.btn-primary {
  background-color: black;
  border-color: black;
}

.btn-primary:hover {
  background-color: #efa0b0;
  border-color: #efa0b0;
}

</style>
