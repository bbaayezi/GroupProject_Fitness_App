<template>
  <v-app>
    <v-toolbar app
    color="#ffad33">
      <v-toolbar-title class="headline text-uppercase">
        <span class="mx-3 white--text">Vuetify</span>
        <span class="mx-3 white--text">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      flat
      @click="jumpHome"
      >
        <span class="mx-2 white--text">Home</span>
      </v-btn>

      <v-btn
      flat
        @click="jumpAbout"
      >
        <span class="mx-2 white--text">About</span>
      </v-btn>

      <v-btn v-if="loginStatus == false"
      flat
        @click="jumpLogin"
      >
        <span class="mx-2 white--text">Login</span>
      </v-btn>

       <v-btn v-if="loginStatus == true"
      flat
        @click="jumpLogout"
      >
        <span class="mx-2 white--text">Logout</span>
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

