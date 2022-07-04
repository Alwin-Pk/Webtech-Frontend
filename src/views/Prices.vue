<template>
  <div class="container">
    <h1 class="pageHeader">Preise und Leistungen</h1>
    <div class="prices">
      <div class="row">
        <hr style="width: 100%;margin-top:30px;margin-bottom: 50px">
        <div class="column">
          <p class="head"><b>Behandlung</b></p>
          <p>Ganzkörpermassage</p>
          <p>Maniküre</p>
          <p>Shellack Pediküre</p>
        </div>
        <div class="column">
          <p class="head"><b>Beschreibung</b></p>
          <p>Erholen Sie sich vom Alltagsstress. 60 Minuten Ganzkörpermassage für Ihr Wohlbefinden</p>
          <p>Nagelbad, Hornhautentfernung, Nagelhautentfernung, Nägel kürzen und feilen, Nagellack auftragen.</p>
          <p>Fußbad, Hornhautentfernung, Nagelhautentfernung, Nägel kürzen und feilen, Shellack auftragen.</p>
        </div>
        <div class="column">
          <p class="head"><b>Preis in €</b></p>
          <p>75€</p>
          <p>45€</p>
          <p>55€</p>
        </div>
        <hr style="width: 100%;margin-top: 50px;margin-bottom: 30px">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Prices'
}

</script>

<style scoped>

h1.pageHeader {
  font-family: "Avenir Next", sans-serif;
  text-align: center;
  padding-top: 35px;
  font-size: 35px;
}

.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.head {
  font-size: 23px;
}

</style>
