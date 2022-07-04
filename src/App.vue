<template>
    <div class="header">
      <h1 class="globalHeader"><span class="stretch">PASSION</span><br><p class="kos">KOSMETIKSALON</p></h1>
    </div>
      <carousel></carousel>
      <navbar></navbar>
    <router-view/>
  <footer class="globalFooter">
    <div class="row">
      <div class="footer-content">
        <div class="footer-times">
          <h5 class="footer-times-title">Öffnungszeiten:</h5>
          Di. - Fr. 10:00 - 19:00 Uhr <br>
          Samstag: 10:00 - 14:00 Uhr
        </div>
        <div class="kospassion">
          <b>Kosmetik Salon Passion</b> <br>
          Inh. Magdalena Pekala <br>
        </div>
        <a class="address" target="_blank" href="https://www.google.de/maps/place/Kosmetik+Salon+Passion/@52.506637,13.2964346,17z/data=!3m1!4b1!4m5!3m4!1s0x47a850d956bf7d61:0x47330eef31cdb558!8m2!3d52.5066181!4d13.2986228">
        Kantstraße 93 - 10627 Berlin-Charlottenburg
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Card from '@/components/Card'
import Carousel from '@/components/Carousel'
import Prices from '@/views/Prices'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Carousel,
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    Card,
    // eslint-disable-next-line vue/no-unused-components
    Prices
  }
}
</script>

<style>

/*Banner image*/
div.header {
  background-repeat: no-repeat;
  aspect-ratio: auto;
  background-size: cover;
  background-image: url("/src/assets/head-banner.png");
  margin-bottom: -8px;
}

.globalHeader{
  font-family: "Avenir Next", sans-serif;
  padding: 60px;
  text-align: center;
  color: black;
  font-size: 38px;
}

.globalFooter {
  background-color: black;
  color: white;
  font-family: "Avenir Next", sans-serif;
  margin-top: 30px;
  padding: 20px;
}

.footer-content {
  text-align: right;
  margin: auto;

}

.footer-times-title {
  font-size: 23px;
  margin-bottom: 3px;
}

.footer-times {
  margin: auto;
  float: left;
  text-align: left;
}

.kospassion {
  font-size: 110%;
}

.address {
  font-size: 110%;
}

.address:link {
  color: white;
  text-decoration: none;
}

.address:hover {
  color: #e77a8c;
  background-color: transparent;
  text-decoration: none;
}

.address:visited {
  color: white;
  text-decoration: none;
}

.address:visited:hover {
  color: #e77a8c;
  background-color: transparent;
  text-decoration: none;
}

/*Header PASSION*/
span.stretch {
  display:inline-block;
  font-family: "Times New Roman OS Regular", sans-serif;
  -webkit-transform:scale(2.5,1.5); /* Safari and Chrome */
  -moz-transform:scale(2.5,1.5); /* Firefox */
  -ms-transform:scale(2.5,1.5); /* IE 9 */
  -o-transform:scale(2.5,1.5); /* Opera */
  transform:scale(2.5,1.5); /* W3C */
}

/*Header KOSMETIKSALON*/
.kos {
  padding: 0;
  margin: 0;
  -webkit-transform:scale(1.20,1.10); /* Safari and Chrome */
  -moz-transform:scale(1.20,1.10); /* Firefox */
  -ms-transform:scale(1.20,1.10); /* IE 9 */
  -o-transform:scale(1.20,1.10); /* Opera */
  transform:scale(1.20,1.10); /* W3C */
  color: #e77a8c;
}

/*Navbar font padding*/
nav {
  padding: 30px;
  font-weight: bold;
}

/*Navbar color of active tab*/
nav a.router-link-active {
  color: #d06072;
}

.navbar a:hover{
  color: #efa0b0;
}

.navbar a:active {
  color: #d06072;
}

.navbar a:focus {
  color: #d06072;
}

.navbar a {
  color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}

</style>
