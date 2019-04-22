<template>
  <v-app>
    <Header/>
    <router-view></router-view>
    <br>
    <DrawerList fixed class="hidden-md-and-up white--text"/>
    <Footer class="hidden-sm-and-down white--text"/>
    <v-goTop></v-goTop>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import DrawerList from "./components/DrawerList";
import goTop from "./components/BackTop";
export default {
  name: "App",
  data() {
    return {
      // loginStatus: false
      //
      drawer: null
    };
  },
  methods: {
  },
  components: {
    Footer,
    Header,
    DrawerList,
     'v-goTop': goTop
  }
};
</script>

