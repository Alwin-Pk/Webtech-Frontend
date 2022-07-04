<template>
  <div class="container">
    <div class='demo-app'>
      <div class='demo-app-main'>
        <FullCalendar class='demo-app-calendar' :options='calendarOptions'></FullCalendar>
      </div>
    </div>
    <h2 class="bookedHeader">Zuletzt gebucht:</h2>
    <div class="booked" v-for="guest in guests" :key="guest.id">
      <p>{{ guest.firstName }} hat eine Behandlung für den {{guest.date }} gebucht.</p>
    </div>
  </div>
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listDay from '@fullcalendar/list'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Termin',

  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data () {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listDay, interactionPlugin],
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        headerToolbar: {
          left: 'prev, next today',
          center: 'title',
          right: 'dayGridMonth, timeGridDay, listDay'
        },
        events: []
      },
      currentEvents: [],
      guests: []
    }
  },
  mounted () {
    const endUrl = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/guests'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endUrl, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(guest => {
        this.guests.push(guest)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-family: "Avenir Next", serif;
  font-size: 16px;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1000px;
  margin: 0 auto;
}

h2.bookedHeader {
  padding-bottom: 36px;
  color: #e77a8c;
  font-size: 30px;
}
c
.booked {
margin-bottom: 50px;
}

</style>
