<template>
  <div class="container" style="margin-top: 20px;">
    <h1 class="pageHeader">Über mich</h1>
    <hr style="width: 100%;margin-top:50px;margin-bottom: 50px">
    <div class="row" style="margin-bottom: -40px">
      <div class="col-left">
        <img class="bild" src="../assets/magdalena-pekala.png">
      </div>
      <div class="col-mid">
        <!---->
      </div>
      <div class="col-right">
        <h2 class="inh"><b>Magdalena Pekala</b> Kosmetikerin & Masseurin</h2>
        <p>Im Jahr 2010 habe ich ein Praktikum als Ganzheitskosmetikerin in der Kosmetikakademie "Prestige" abgeschlossen und im Spa-Bereich des Steigenberger Hotels in Berlin gearbeitet.</p>
        <p>2012 wurde ich selbstständig und habe im Nebenzimmer eines Friseursalons meine kosmetischen Dienstleistungen angeboten.</p>
        <p>Drei Jahre später eröffnete ich meinen eigenen Kosmetik Salon in der Kantstraße 93 in Berlin-Charlottenburg,<br>seitdem leite ich den Salon bis heute.</p>
        <p>Im laufe meiner Karriere nahm ich an verschiedenen Schulungen sowie Weiterbildungen teil und biete neben der klassischen Kosmetik auch Ultraschall- Microdermabrasion-, Microneedling- und Fruchtsäure-Behandlungen an.</p>
        <p>Ich verwende ausschließlich Kosmetikprodukte hoher Qualität der Marken CNC, Baehr, Dr. Spiller Biokosmetik sowie Geräte der etablierten Firma Ionto Comed.</p>
      </div>
    </div>
    <br>
    <hr style="width: 100%;margin-top: 0;margin-bottom: 30px">
      <a class="insta" target="_blank" href="https://www.instagram.com/passion_kosmetik/"><b>Instagram</b></a>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>

.col-left {
  margin-top: 30px;
  width: 50%;
}

.col-mid {
  width: 3%;
}

.col-right {
  text-align: left;
  margin-top: 8px;
  width: 35%;
}

.insta {
  background: -webkit-linear-gradient(360deg, #f55b00, #b726e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  text-align: center;
  font-size: 26px;
}

.insta:hover {
  background: -webkit-linear-gradient(180deg, #f55b00, #b726e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

h1.pageHeader {
  padding-top: 30px;
}

h2 {
  margin-bottom: 30px;
}

.bild {
  width: 95%;
  height: 75%;
  margin: 30px;
}

/*.bild {*/
/*  width: 110%;*/
/*  height: 90%;*/
/*  margin-top: 6px;*/
/*  margin-left: 130px;*/
/*}*/

</style>
