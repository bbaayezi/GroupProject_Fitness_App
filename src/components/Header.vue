<template>
  <v-toolbar app color="#ffad33">
    <v-toolbar-title class="headline text-uppercase">
      <span class="mx-3 white--text">{{getUserCurrentView}}</span>
    </v-toolbar-title>

    <div class="hidden-sm-and-down">
      <v-btn flat @click="jump('home')">
        <span class="mx-2 white--text"><v-icon>home</v-icon></span>
      </v-btn>
      <v-btn flat @click="jump('course')">
        <span class="mx-2 white--text"><v-icon>directions_bike</v-icon></span>
      </v-btn>
      <v-btn flat @click="jump('recipe')">
        <span class="mx-2 white--text"><v-icon>restaurant</v-icon></span>
      </v-btn>
      <v-btn flat @click="jump('summary')">
        <span class="mx-2 white--text"><v-icon>directions_bike</v-icon></span>
      </v-btn>
    </div>
    <v-spacer></v-spacer>

    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Search"
      prepend-inner-icon="search"
      class="hidden-xs-only"
    ></v-text-field>

    <v-btn v-if="getLoginStatus" flat @click="jump('about')">
      <span class="mx-2 white--text"><v-icon>perm_identity</v-icon></span>
    </v-btn>

    <v-btn flat @click="loginBtn">
      <span class="mx-2 white--text">{{ getLoginStatus ? "LogOut" : "Login" }}</span>
    </v-btn>

    <v-toolbar-side-icon class="hidden-md-and-up white--text" @click.stop="openDrawer"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLogedIn: this.$store.getters.getLoginStatus,
      userCurrentView: this.$store.getters.getUserCurrentView,
      drawer: null
    };
  },
  methods: {
    openDrawer() {
      this.$emit("drawer-click");
    },
    jump(name) {
      this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(name);
      // update state in Vuex
      
    },
    loginBtn() {
      if (this.$store.getters.getLoginStatus) {
        // logout
        this.$store.dispatch("toggleLogin", { status: false });
        this.$router.push("/");
      } else {
        // login
        this.$router.push("login");
      }
      // update state in Vuex
    }
  },
  computed: {
    ...mapGetters(["getLoginStatus"]),
    ...mapGetters(["getUserCurrentView"])
  }
};
</script>

