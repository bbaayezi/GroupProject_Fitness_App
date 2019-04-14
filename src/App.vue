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
      <v-list dense>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
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
    Header
  }
};
</script>

