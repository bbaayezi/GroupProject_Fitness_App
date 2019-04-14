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
      @click="jump('home')"
      >
        <span class="mx-2 white--text">Home</span>
      </v-btn>

      <v-btn
      flat
        @click="jump('about')"
      >
        <span class="mx-2 white--text">UserInfo</span>
      </v-btn>

      <v-btn v-if="loginStatus == false"
      flat
        @click="jump('login')"
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
        jump(name) {
            this.$router.push(name)
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

