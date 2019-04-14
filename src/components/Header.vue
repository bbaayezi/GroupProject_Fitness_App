<template>
  <v-toolbar app color="#ffad33">
    <v-toolbar-title class="headline text-uppercase">
      <span class="mx-3 white--text">Vuetify</span>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    <v-text-field
        solo-inverted
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        class="hidden-xs-only"
    ></v-text-field>
    <div class="hidden-sm-and-down">
      <v-btn flat @click="jump('home')">
        <span class="mx-2 white--text">Home</span>
      </v-btn>
      <v-btn flat @click="jump('course')">
        <span class="mx-2 white--text">Course</span>
      </v-btn>
      <v-btn flat @click="jump('recipe')">
        <span class="mx-2 white--text">Recipe</span>
      </v-btn>

      <v-btn v-if="getLoginStatus" flat @click="jump('about')">
        <span class="mx-2 white--text">userInfo</span>
      </v-btn>

      <v-btn flat @click="loginBtn">
        <span class="mx-2 white--text">{{ getLoginStatus ? "LogOut" : "Login" }}</span>
      </v-btn>
    </div>
    
    <v-toolbar-side-icon class="hidden-md-and-up white--text" @click.stop="openDrawer"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLogedIn: this.$store.getters.getLoginStatus,
      drawer: null
    };
  },
  methods: {
    openDrawer() {
      this.$emit("drawer-click");
    },
    jump(name) {
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
    ...mapGetters(["getLoginStatus"])
  }
};
</script>

