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

