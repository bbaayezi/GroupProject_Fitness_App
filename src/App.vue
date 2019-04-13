<template>
  <v-app>
    // can be removed
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

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      loginStatus: false,
      //
    }
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
