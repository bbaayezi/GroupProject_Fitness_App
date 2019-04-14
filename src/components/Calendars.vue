<template>
  <v-layout justify-space-between wrap>
    <v-flex xs12 sm6 class="my-3">
      <v-date-picker
        v-model="date"
        :events="arrayEvents"
        event-color="green lighten-1"
      ></v-date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
      props: [''],
    data: () => ({
      arrayEvents: null,
      date: new Date().toISOString().substr(0, 10),
    }),

    mounted () {
      this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(12)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
    },

    methods: {
      functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        return false
      }
    }
  }
</script>