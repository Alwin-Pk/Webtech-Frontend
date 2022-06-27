<template>
  <body>
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img
          src="https://www.float-stuttgart.de/public/uploads/plugins/webshop/productsimages/1157/deluxe-rueckenmassage_0_1511091256.jpg"
          class="card-img-top" alt="...">
        <div class="card-body">
          <div class="col" v-for="guest in guests" :key="guest.id">
            <h5 class="card-title"><b>Shellack Pediküre</b></h5>
          </div>
          <p class="card-text">Fußbad, Hornhautentfernung, Nagelhautentfernung, Nägel kürzen und feilen, Shellack auftragen.</p>
          <b>Angebotspreis: 45€</b>
          <p></p>
          <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Jetzt buchen!
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
          <form class="text-start needs-validation" id="guests-create-form" novalidate>
          <div class="m-4">
            <div class="row g-2">
              <div class="col-12">
                  <label for="firstName" class="form-label">Vorname</label>
                  <input type="text" class="form-control" id="firstName" v-model="firstName" required>
                <label for="lastName" class="form-label">Nachname</label>
                <input type="text" class="form-control" id="lastName" v-model="lastName" required>
                </div>
              <div class="input-group">
                <label for="emailAdresse" class="form-label">E-Mail</label>
                <input type="text" class="form-control" id="emailAdresse" v-model="emailAdresse" required>
              </div>
            </div>
            <div class="input-group">
              <label for="telefonNummer" class="form-label">Telefonnummer</label>
              <input type="text" class="form-control" id="telefonNummer" v-model="telefonNummer" required>
            </div>
            <div class="input-group">
              <label for="date" class="form-label">Datum</label>
              <input type="text" class="form-control" id="date" v-model="date" required>
            </div>
            <div v-if="this.serverValidationMessages">
              <ul>
                <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
                  {{ message }}
                </li>
              </ul>
            </div>
            <button class="btn btn-primary me-3" type="submit" @click.prevent="createGuests">Jetzt buchen</button>
          </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>

export default {
  // eslint-disable no-unused-vars
  // eslint-disable-next-line vue/no-unused-components
  // eslint-disable no-undef
  // eslint-disable-next-line vue/multi-word-component-names
  /* eslint-disable */
  name: 'card',
  data () {
    return {
      guests: [
        {
          id: 1,
          telefonNummer: '1243234788',
          lastName: 'Max',
          firstName: 'Mustermann',
          emailAdresse: 'testguest@htw.de',
          date: '21.05.2020 13:23'
        }
      ]
    }
  },
  mounted () {
    const externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/webui-popover/1.2.18/jquery.webui-popover.min.js')
    document.head.appendChild(externalScript)
    const externalScript2 = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js')
    document.head.appendChild(externalScript)
    const collapseElementList = document.querySelectorAll('.collapse')
    const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

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
