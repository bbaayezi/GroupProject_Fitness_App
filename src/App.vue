<template>
  <v-app>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
      // loginStatus: false
      //
    };
  },
  components: {
    Footer,
    Header
  }
};
</script>

<style>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  display: inline;
  float: left;
}
</style>

