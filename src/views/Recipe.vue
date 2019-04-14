<template>
  <v-content>
    <Carousel/>

    <br>
    <div class="display-3 font-weight-bold orange--text text-md-center">Recipe Recommendation</div><br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(nutrition, id) in getNutritionList" :key="id" xs12 sm8 md4>
        <DataIterator 
            :name="nutrition.name"
            :calories="nutrition.calories"
            :fat="nutrition.fat"
            :carbs="nutrition.carbs"
            :protein="nutrition.protein"
            :sodium="nutrition.sodium"
            :calcium="nutrition.calcium"
            :iron="nutrition.iron"/>
      </v-flex>
    </v-layout>
    <br>
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
