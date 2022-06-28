<template>
  <body>
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img
          src=" {{imgsource }}"
          class="card-img-top" alt="Image not available">
<!--        https://www.float-stuttgart.de/public/uploads/plugins/webshop/productsimages/1157/deluxe-rueckenmassage_0_1511091256.jpg-->
        <div class="card-body">
            <h5 class="card-title"><b>{{ angebot }}</b></h5>
          <p class="card-text"> {{ beschreibung }}</p>
          <b>Angebotspreis: {{ preis }}</b>
          <p></p>
          <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Jetzt buchen!
            </button>
          </p>
          <div class="collapse" id="collapseExample">
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
  props: ['angebot', 'beschreibung', 'preis', 'imgsource'],
  mounted () {
    // const externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/webui-popover/1.2.18/jquery.webui-popover.min.js')
    // document.head.appendChild(externalScript)
    // const externalScript2 = document.createElement('script')
    // externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js')
    // document.head.appendChild(externalScript)
    // const collapseElementList = document.querySelectorAll('.collapse')
    // const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
  },
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

</style>
