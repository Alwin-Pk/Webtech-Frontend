<template>
  <body>
    <div class="container">
      <div class="card" style="width: 18rem;height: auto">
        <img
          :src="imgsource"
          class="card-img-top" alt="Image not available">
        <div class="card-body" style="background-image: linear-gradient(180deg, #ffffff 40%, rgb(231,122,140,0.4) 100%)">
            <h5 class="card-title"><b>{{ angebot }}</b></h5>
          <p class="card-text"> {{ beschreibung }}</p>
          <b>Angebotspreis: {{ preis }}</b>
          <p class="instead"><b>(anstatt {{ oldPrice }})</b></p>
          <p></p>
          <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#${card_id}`" aria-expanded="false" :aria-controls="card_id">
              Jetzt buchen!
            </button>
          </p>
          <div class="collapse" :id="card_id">
            <div class="card card-body">
              <guest-form></guest-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>

import GuestForm from '@/components/GuestForm'

export default {
// eslint-disable no-unused-vars
// eslint-disable-next-line vue/no-unused-components
// eslint-disable no-undef
// eslint-disable-next-line vue/multi-word-component-names
  /* eslint-disable */
  name: 'Card',
  components: {GuestForm},
  props: ['angebot', 'beschreibung', 'preis', 'imgsource', 'card_id', 'oldPrice']
}

</script>

<style scoped>

.instead {
  color: red;
  font-size: 15px;
}

.btn-primary {
  background-color: black;
  border-color: black;
}

.btn-primary:hover {
  background-color: #d06072;
  border-color: #d06072;
}

.btn-primary:focus {
  background-color: #efa0b0;
  border-color: #efa0b0;
}

</style>
