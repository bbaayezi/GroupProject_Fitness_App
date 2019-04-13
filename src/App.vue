<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      flat
        @click="jumpHome"
      >
        <span class="mr-1">Home</span>
      </v-btn>

      <v-btn
      flat
        @click="jumpAbout"
      >
        <span class="mr-2">About</span>
      </v-btn>

      <v-btn v-if="loginStatus == false"
      flat
        @click="jumpLogin"
      >
        <span class="mr-3">Login</span>
      </v-btn>

       <v-btn v-if="loginStatus == true"
      flat
        @click="jumpLogout"
      >
        <span class="mr-3">Logout</span>
      </v-btn>
    </v-toolbar>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";

export default {
  name: 'App',
  data () {
    return {
      loginStatus: false,
      //
    }
  },
  components: {
    Footer
  },
  methods: {
        jumpAbout() {
            this.$router.push('about')
            // update state in Vuex
        },
        jumpLogin() {
            this.$router.push('login')
            this.loginStatus = true
            // update state in Vuex
        },
        jumpHome() {
            this.$router.push('home')
            // update state in Vuex
        },
        jumpLogout() {
            this.$router.push('home')
            this.loginStatus = false
            // update state in Vuex
        },

    }
}
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

