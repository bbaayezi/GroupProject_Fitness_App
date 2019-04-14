<template>
  <v-content>
    <div class="display-3 font-weight-bold orange--text text-md-center">Recipe Recommendation</div>
    <br>
    <v-layout row justify-center>
        <v-flex xs2>
      <div class="display-1 font-weight-bold white--text light-green darken-1 text-md-center">Lose Weight<br></div>
    </v-flex>
    </v-layout>
    <br>
    <v-layout justify-space-around row wrap>
      <DataTable/>
    </v-layout>
    <br>
    <br>
    <v-layout row justify-center>
        <v-flex xs2>
    <div class="display-1 font-weight-bold white--text light-green darken-1 text-md-center">Get Strong</div>
    </v-flex>
    </v-layout>
     <br>
    <v-layout justify-space-around row wrap>
      <DataTable/>
    </v-layout>
    <br>
    <br>
     <v-layout row justify-center>
        <v-flex xs2>
    <div class="display-1 font-weight-bold white--text light-green darken-1 text-md-center">Get Fit</div>
    </v-flex>
    </v-layout>
    <br>
    <v-layout justify-space-around row wrap>
      <DataTable/>
    </v-layout>
    <br>
    <br>
>>>>>>> refs/remotes/origin/ui
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "../components/DataTable";

export default {
  data() {
    return {};
  },
  components: {
    DataTable
  },
  computed: {
    ...mapGetters(["getNutritionList"])
  }
};
</script>
