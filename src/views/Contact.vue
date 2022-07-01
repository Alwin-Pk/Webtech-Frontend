<template>
  <div class="about">
    <header>
      <div class="address">
        <h1>Kontakt</h1>
        <p>Inhaber Magdalena Pekala</p>
        <p>Kantstraße 93</p>
        <p>10627 Berlin</p>
      </div>
    </header>
    <p style="padding: 10px" />
    <div class="maps">
      <iframe width="400" height="400" src="https://regiohelden.de/google-maps/map.php?width=400&height=400&q=Kosmetiksalon%20Passion%20-%20Kantstra%C3%9Fe%2093%20+10627+Berlin">
        <a style="font-size: 9px;" href="https://www.regiohelden.de/google-maps/">&#x47;&#x6F;&#x6F;&#x67;&#x6C;&#x65;&#x20;&#x4D;&#x61;&#x70;&#x73;&#x20;&#x47;&#x65;&#x6E;&#x65;&#x72;&#x61;&#x74;&#x6F;&#x72;
        </a>&#x20;&#x62;&#x79;&#x20;
        <a href="https://www.regiohelden.de/">&#x52;&#x65;&#x67;&#x69;&#x6F;&#x48;&#x65;&#x6C;&#x64;&#x65;&#x6E;
        </a>
      </iframe>
      <span style="font-size: 9px;">
        <a style="font-size: 9px;" href="https://www.regiohelden.de/google-maps/">&#x47;&#x6F;&#x6F;&#x67;&#x6C;&#x65;&#x20;&#x4D;&#x61;&#x70;&#x73;&#x20;&#x47;&#x65;&#x6E;&#x65;&#x72;&#x61;&#x74;&#x6F;&#x72;
        </a>&#x20;&#x62;&#x79;&#x20;
        <a href="http://www.regiohelden.de/" style="font-size: 9px;">&#x52;&#x65;&#x67;&#x69;&#x6F;&#x48;&#x65;&#x6C;&#x64;&#x65;&#x6E;
        </a>
      </span>
    </div>
    <aside>
      <p style="margin: 1px 0px 10px;">Wenn Sie kurzfristig einen Termin möchten, rufen Sie uns an oder schicken Sie uns eine E-Mail.</p>
      <strong>Tel:</strong> 030 - 20 98 72 45
      <strong>E-Mail: </strong> <a href="mailto:info@kosmetiksalon-passion.de">info@kosmetiksalon-passion.de</a>
      <p style="margin: 12px 0px 10px;"><span style="color: #000;"><strong>Öffnungszeiten:</strong></span>
        Di-Fr. 10:00 - 19:00 Uhr
        Samstag: 10:00 - 14:00 Uhr</p>
      <p style="padding-bottom: 50px"/>
    </aside>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact'
}
</script>

<style scoped>

.maps {
  text-align: left;
}

.about {
  margin-left: 50px;
  margin-right: 50px;
}

aside {
  width: 400px;
  height: 400px;
}

iframe {
  width: 400px;
  height: 400px;
  display: block;
  scroll-behavior: auto;
}

.address {
  font-family: "Avenir Next";
  font-size: 23px;
  padding-left: 60px;
}

.address,
.address h1 {
  text-align: left;
}

/*header {*/
/*  text-align: left;*/
/*}*/

/*h1 {*/
/*  text-align: left;*/
/*}*/

</style>
