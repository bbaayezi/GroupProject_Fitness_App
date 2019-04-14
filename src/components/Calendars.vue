<template>
  <v-layout justify-space-between wrap>
    <v-flex xs12 sm6 class="my-3">
      <v-date-picker v-model="date" event-color="green lighten-1" :events="functionEvents"></v-date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      arrayEvents: null,
      date: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    functionEvents(date) {
      let exerciseDates = this.$store.getters.getExerciseList;
      const [, , day] = date.split("-");
      if (exerciseDates.includes(parseInt(day, 10))) return true;
      return false;
    }
  }
};
</script>