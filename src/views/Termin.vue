<template>
  <div class='demo-app'>
    <div class='demo-app-main'>
      <FullCalendar class='demo-app-calendar' :options='calendarOptions'></FullCalendar>
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
      currentEvents: []
    }
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

</style>
