<template>
  <form class="text-start needs-validation" id="guests-create-form" novalidate>
    <div class="m-4">
      <div class="row g-2">
        <div class="col-12" style="font-size: 13px">
          <label for="firstName" class="form-label">Vorname</label>
          <input type="text" class="form-control" id="firstName" v-model="firstName" required>
          <div class="invalid-feedback">
            Bitte geben Sie Ihren Vornamen ein.
          </div>
          <p></p>
          <label for="lastName" class="form-label">Nachname</label>
          <input type="text" class="form-control" id="lastName" v-model="lastName" required>
          <div class="invalid-feedback">
            Bitte geben Sie Ihren Nachnamen ein.
          </div>
          <p></p>
          <label for="emailAdresse" class="form-label">E-Mail</label>
          <input type="text" class="form-control" id="emailAdresse" v-model="emailAdresse" required>
          <div class="invalid-feedback">
            Bitte geben Sie Ihre Email-Adresse ein.
          </div>
          <p></p>
          <label for="telefonNummer" class="form-label">Telefonnummer</label>
          <input type="text" class="form-control" id="telefonNummer" v-model="telefonNummer" required>
          <div class="invalid-feedback">
            Bitte geben Sie Ihre Telefonnummer ein.
          </div>
          <p></p>
          <label for="date" class="form-label">Gewünschter Termin</label>
          <input type="datetime-local" class="form-control" id="date" v-model="date" required
                 name="date"
                 min="2018-06-07T00:00" max="2018-06-14T00:00">
          <div class="invalid-feedback">
            Bitte geben Sie Ihr gewünschtes Datum ein.
          </div>
        </div>
        <p></p>
      </div>
      <button class="btn btn-primary me-3" type="submit" @click="guestFormEntry" style="font-size: 13px">Anfrage abschicken</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'GuestForm',
  data () {
    return {
      firstName: '',
      lastName: '',
      telefonNummer: '',
      emailAdresse: '',
      date: ''
    }
  },
  methods: {
    guestFormEntry () {
      const valid = this.validate()
      if (valid) {
        const endUrl = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/guests/'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const payload = JSON.stringify({
          telefonNummer: this.telefonNummer,
          lastName: this.lastName,
          firstName: this.firstName,
          emailAdresse: this.emailAdresse,
          date: this.date
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: payload,
          redirect: 'follow'
        }

        fetch(endUrl, requestOptions)
          .catch(error => console.log('error', error))
      }
    },
    validate () {
      (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
        let valid = true
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
      })()
    }
  }
}
</script>

<style scoped>

</style>
