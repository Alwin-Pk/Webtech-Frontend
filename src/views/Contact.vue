<template>
  <div class="container" style="margin-top: 20px">
    <h1 class="pageHeader">Kontakt & Anfahrt</h1>
    <hr style="width: 100%;margin-top: 50px;margin-bottom: 35px">
    <div class="row">
      <div class="col-left">
      </div>
      <div class="col-mid">
        <div class="maps">
          <iframe src="https://regiohelden.de/google-maps/map.php?width=400&height=400&q=Kosmetiksalon%20Passion%20-%20Kantstra%C3%9Fe%2093%20+10627+Berlin"></iframe>
          <span style="font-size: 9px;text-align: center">
            <br>
            <a style="font-size: 9px;" href="https://www.regiohelden.de/google-maps/">&#x47;&#x6F;&#x6F;&#x67;&#x6C;&#x65;&#x20;&#x4D;&#x61;&#x70;&#x73;&#x20;&#x47;&#x65;&#x6E;&#x65;&#x72;&#x61;&#x74;&#x6F;&#x72;</a>&#x20;&#x62;&#x79;&#x20;
            <a href="http://www.regiohelden.de/" style="font-size: 9px;">&#x52;&#x65;&#x67;&#x69;&#x6F;&#x48;&#x65;&#x6C;&#x64;&#x65;&#x6E;</a>
          </span>
        </div>
      </div>
      <div class="col-right">
          <h1 style="margin-bottom: 20px;margin-left: -2px">Impressum</h1>
          <br>
          <strong>Kosmetik Salon Passion</strong>
          <p>
            Inh. Magdalena Pekala<br>
            Kantstraße 93<br>
            10627 Berlin<br>
          </p>
          <br>
          <strong>Tel:</strong> 030 - 20 98 72 45<br>
          <strong>E-Mail:</strong> <a href="mailto:info@kosmetiksalon-passion.de">info@kosmetiksalon-passion.de</a>
          <p>
            <strong>Steuer-Nr.: </strong>123/45/67890<br>
            <strong>USt-ID: </strong>DE282628416
          </p>
        <br>
        <p><strong>Verantwortlich für den Inhalt:</strong><br>Alwin Pekala</p>
      </div>
      <hr style="width: 100%;margin-top: 50px;margin-bottom: 30px">
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact'
}
</script>

<style scoped>

/*.about {*/
/*  box-sizing: border-box;*/
/*  margin: 50px;*/
/*}*/

/*.aboutAddress {*/
/*  margin-top: 50px;*/
/*  text-align: left;*/
/*}*/

.col-right {
  font-size: 18px;
  width: 33%;
  text-align: left;
  margin-top: 30px;
}

.col-mid {
  width: 45%;
}

.col-left {
  width: 10%;
}

iframe {
  width: 500px;
  height: 500px;
  scroll-behavior: auto;
}

/*.contactBox {*/
/*  margin-top: 70px;*/
/*  margin-left: 50px;*/
/*  margin-right: 50px;*/
/*  text-align: left;*/
/*  font-weight: bold;*/
/*}*/

.maps {
  /*background-color: #5be026;*/
  margin-top: 25px;
}

h1.pageHeader {
  padding-top: 30px;
}

.col-right a:link {
  color: #e77a8c;
  text-decoration: none;
}

.col-right a:hover {
  color: #efa0b0;
  background-color: transparent;
  text-decoration: underline;
}

.col-right a:visited {
  color: white;
  text-decoration: none;
}

.col-right a:visited:hover {
  color: #e77a8c;
  background-color: transparent;
  text-decoration: none;
}

</style>
