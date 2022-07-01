<template>
  <body>
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img
          :src="imgsource"
          class="card-img-top" alt="Image not available">
        <div class="card-body">
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
              <GuestForm></GuestForm>
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
  name: 'card',
  components: {GuestForm},
  props: ['angebot', 'beschreibung', 'preis', 'imgsource', 'card_id', 'oldPrice'],
  emits: ['created'],
  methods: {
    async createGuests () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/guests'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const guests = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          emailAdresse: this.emailAdresse,
          telefonNummer: this.telefonNummer,
          date: this.date
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: guests,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    validate () {
      const form = document.getElementById('guests-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}

</script>

<style scoped>

.instead {
  color: red;
  font-size: 15px;
}

</style>
