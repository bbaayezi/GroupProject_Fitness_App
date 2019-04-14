<template>
  <v-content>
    <Carousel/>

    <br>
    <div class="display-3 font-weight-bold orange--text text-md-center">Course</div><br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getCourseList" :key="id" xs12 sm8 md4>
        <Card :imgSrc="card.src" :title="card.title"/>
      </v-flex>
    </v-layout>
    <br>

    <div class="display-3 font-weight-bold orange--text text-md-center">Recipe</div><br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getRecipeList" :key="id" xs12 sm8 md3>
        <Card :imgSrc="card.src" :title="card.title"/>
      </v-flex>
    </v-layout>
    <!-- </table> -->
    <br>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default {
  data() {
    return {
      
    };
  },
  components: {
    Carousel,
    Card,
  },
  computed: {
    ...mapGetters([
      "getCourseList",
      "getRecipeList",
    ])
  }
};
</script>
