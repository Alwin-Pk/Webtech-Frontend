<template>
    <div class="header">
      <h1 class="globalHeader"><span class="stretch">PASSION</span><br><p class="kos">KOSMETIKSALON</p></h1>
    </div>
      <carousel></carousel>
      <navbar></navbar>
    <router-view/>
  <footer class="globalFooter">
    <div class="row">
      <div class="footer-3">
        Kosmetiksalon Passion <br>
        Inh. Magdalena Pekala <br>
        Kantstraße 93 - 10627 Berlin-Charlottenburg
        <div class="footer-angebot" style="text-align: center">
          <h5 class="footer-angebot-title">Weitere Angebote finden Sie auf Treatwell</h5>
          <p></p>
          <a target="_blank" rel="noopener noreferrer" href="https://buchung.treatwell.de/ort/passion-kosmetik-salon/" class="btn btn-primary">Zu den Angeboten</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import card from '@/components/card'
import carousel from '@/components/carousel'
import Prices from '@/views/Prices'
import footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    carousel,
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    card,
    // eslint-disable-next-line vue/no-unused-components
    Prices,
    // eslint-disable-next-line vue/no-unused-components
    footer
  }
}
</script>

<style>

/*Banner image*/
div.header {
  background-image: url("/src/assets/head-banner.png")
}

.globalHeader{
  font-family: "Avenir Next";
  padding: 60px;
  text-align: center;
  color: black;
  font-size: 38px;
}

.globalFooter {
  background-color: black;
  color: white;
  font-family: "Avenir Next";
  margin-top: 20px;
  padding: 20px;
}

/*Footer address*/
.footer-3 {
  text-align: right;
}

/*Header PASSION*/
span.stretch {
  display:inline-block;
  font-family: "Times New Roman OS Regular";
  -webkit-transform:scale(2,1); /* Safari and Chrome */
  -moz-transform:scale(2,1); /* Firefox */
  -ms-transform:scale(2,1); /* IE 9 */
  -o-transform:scale(2,1); /* Opera */
  transform:scale(3,2); /* W3C */
}

/*Header KOSMETIKSALON*/
.kos {
  padding-top: 3px;
  -webkit-transform:scale(1.45,1); /* Safari and Chrome */
  -moz-transform:scale(1.45,1); /* Firefox */
  -ms-transform:scale(1.45,1); /* IE 9 */
  -o-transform:scale(1.45,1); /* Opera */
  transform:scale(1.45,1); /* W3C */
  color: #e77a8c;
}

/*Navbar font padding*/
nav {
  padding: 30px;
  font-weight: bold;
}

/*Navbar color of active tab*/
nav a.router-link-exact-active {
  color: #efa0b0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
