<template>
  <v-content>
    <div class="display-3 font-weight-bold orange--text text-md-center">Recipe Recommendation</div><br>
     <DataIterator/>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import DataIterator from "../components/DataIterator";

export default {
  data() {
    return {
      
    };
  },
  components: {
    DataIterator,
  },
  computed: {
    ...mapGetters([
      "getNutritionList",
    ])
  }
};
</script>
