<template>
  <v-toolbar app color="#ffad33">
    <v-toolbar-title class="headline text-uppercase">
      <span class="mx-3 white--text">Vuetify</span>
      <span class="mx-3 white--text">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat @click="jumpHome">
      <span class="mx-2 white--text">Home</span>
    </v-btn>

    <v-btn flat @click="jumpAbout">
      <span class="mx-2 white--text">About</span>
    </v-btn>

    <v-btn flat @click="loginBtn">
      <span class="mx-2 white--text">{{ getLoginStatus ? "LogOut" : "Login" }}</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLogedIn: this.$store.getters.getLoginStatus
    };
  },
  methods: {
    jumpAbout() {
      this.$router.push("about");
      // update state in Vuex
    },
    jumpHome() {
      this.$router.push("home");
      // update state in Vuex
    },
    loginBtn() {
      if (this.$store.getters.getLoginStatus) {
        // logout
        this.$store.dispatch('toggleLogin', {status: false});
        this.$router.push("/");
      } else {
        // login
        this.$router.push("login");
      }
      // update state in Vuex
    }
  },
  computed: {
    ...mapGetters([
      'getLoginStatus'
    ])
  }
};
</script>

