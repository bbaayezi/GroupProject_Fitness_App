<template>
  <v-content>
    <Carousel/>

    <br>
    <h2>Course</h2>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getCourseList" :key="id" xs12 sm8 md5>
        <Card :imgSrc="card.src" :title="card.title"/>
      </v-flex>
    </v-layout>
    <br>
    <h2>Recipe</h2>
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
    Card
  },
  computed: {
    ...mapGetters([
      "getCardList",
      "getCourseList",
      "getRecipeList"
    ])
  }
};
</script>
