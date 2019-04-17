<template>
  <v-app>
    <Header @drawer-click="toggleDrawer"/>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      clipped
      app
    >
      <DrawerList/>
    </v-navigation-drawer>
    <router-view></router-view>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import DrawerList from "./components/DrawerList";

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
    toggleDrawer() {
      this.drawer = !this.drawer;
    }
  },
  components: {
    Footer,
    Header,
    DrawerList
  }
};
</script>

