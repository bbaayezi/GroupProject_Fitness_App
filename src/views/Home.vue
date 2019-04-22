<template>
  <v-content>
    <!-- login form floating on a background image -->
    <v-container fluid pa-0>
      <div
        class="bg"
        :style="{background: `url('${background}') no-repeat`, backGroundSize: 'cover'}"
      ></div>
      <!-- place to hold login form -->
      <v-layout justify-end>
        <v-flex xs10 md8 class="hidden-sm-and-down">
          <div class="display-3 font-weight-bold wordColor content-front">Join today
            <br> for customized <br> workout plan</div>
        </v-flex>
        <v-flex xs10 md4 ma-5>
          <login-form></login-form>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <div class="display-2 font-weight-bold orange--text text-md-center mt-3">Course</div>
    
    <v-layout justify-space-around mt-3>
      <v-flex v-for="(card, id) in getCourseList" :key="id" xs12>
        <v-card>
          <v-img :src="card.src" aspect-ratio="1.5"></v-img>
          <v-card-title primary-title>
            <div class="headline mb-0 text-md-center"><b>{{ card.title }}</b></div>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn flat>VIEW</v-btn>
            </v-card-actions>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>-->
    <div class="display-3 font-weight-bold orange--text text-md-center mt-5">Course</div>
    <br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getCourseList" :key="id" xs12 sm6 md5>
        <Card :imgSrc="card.src" :title="card.title" :link="card.link"/>
      </v-flex>
    </v-layout>
    <br>

    <div class="display-3 font-weight-bold orange--text text-md-center">Recipe</div>
    <br>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="(card, id) in getRecipeList" :key="id" xs12 sm4 md4>
        <Card :imgSrc="card.src" :title="card.title" :link="card.link"/>
      </v-flex>
    </v-layout>

    <br>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";

import LoginForm from "@/components/LoginForm";
import Card from "../components/Card";

export default {
  data() {
    return {
      background: require("../../public/img/homeBg.jpg")
    };
  },
  components: {
    LoginForm,
    Card
  },
  computed: {
    ...mapGetters(["getCourseList", "getRecipeList"])
  }
};
</script>

<style scoped>
.bg {
  filter: blur(8px);
  background-color: #161616;
  background-size: cover !important;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: absolute;
}
.content-front {
  position: absolute;
  left: 10%;
  top: 4%;
  right: 10px;

}
.wordColor {
  color: #bdbdbd;
}
</style>

