<template>
  <v-content>
    <Carousel/>

    <br>
    <div class="display-3 font-weight-bold orange--text text-md-center">Indoor</div><br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getIndoorList" :key="id" xs12 sm8 md4>
        <Card :imgSrc="card.src" :title="card.title"/>
      </v-flex>
    </v-layout>
    <br>

    <div class="display-3 font-weight-bold orange--text text-md-center">Outdoor</div><br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getOutdoorList" :key="id" xs12 sm8 md3>
        <Card :imgSrc="card.src" :title="card.title"/>
      </v-flex>
    </v-layout>
    <br>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/Card";

export default {
  data() {
    return {
      
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters([
      "getIndoorList",
      "getOutdoorList",
    ])
  }
};
</script>
