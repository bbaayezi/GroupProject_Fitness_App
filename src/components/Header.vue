<template>
  <v-toolbar app color="#ffad33">
    <v-toolbar-title class="headline text-uppercase">
      <span class="mx-3 white--text">{{getUserCurrentView}}</span>
    </v-toolbar-title>

    <div class="hidden-sm-and-down">
      <v-btn flat @click="jump('home')" v-if="!getLoginStatus">
        <span class="mx-2 white--text">
          <v-icon>home</v-icon>
        </span>
      </v-btn>
      <v-btn v-if="getLoginStatus" flat @click="jump('summary')">
        <span class="mx-2 white--text">
          <v-icon>perm_identity</v-icon>
        </span>
      </v-btn>
      <v-btn flat @click="jump('course')">
        <span class="mx-2 white--text">
          <v-icon>directions_bike</v-icon>
        </span>
      </v-btn>
      <v-btn flat @click="jump('recipe')">
        <span class="mx-2 white--text">
          <v-icon>restaurant</v-icon>
        </span>
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
      v-model="search"
      @keyup.enter="search1"
    ></v-text-field>

    <v-btn flat @click="loginBtn" v-if="getLoginStatus">
      <span class="mx-2 white--text">LogOut</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLogedIn: this.$store.getters.getLoginStatus,
      userCurrentView: this.$store.getters.getUserCurrentView,
      drawer: null,
      search: ""
    };
  },
  methods: {
    search1() {
      var flag = false;
      var arr1 = ["home", "house", "homepage", "index"];
      var arr2 = [
        "course",
        "about",
        "full",
        "lower",
        "upper",
        "core",
        "body",
        "indoor",
        "outdoor",
        "skating",
        "climbing",
        "swimming",
        "running"
      ];
      var arr3 = ["recipe", "weight", "strong", "fit"];
      for (var i = 0; i < arr1.length; i++) {
        if (this.search.toLowerCase() == arr1[i]) {
          this.$store.dispatch("toggleUserView", { status: "home" });
          this.$router.push("home");
          flag = true;
        }
      }
      for (var i = 0; i < arr2.length; i++) {
        if (this.search.toLowerCase() == arr2[i]) {
          this.$store.dispatch("toggleUserView", { status: "course" });
          this.$router.push("course");
          flag = true;
        }
      }
      for (var i = 0; i < arr3.length; i++) {
        if (this.search.toLowerCase() == arr3[i]) {
          this.$store.dispatch("toggleUserView", { status: "recipe" });
          this.$router.push("recipe");
          flag = true;
        }
      }
      if (flag == false) {
        this.$router.push("error");
      }
    },
    jump(name) {
      this.$store.dispatch("toggleUserView", { status: name });
      this.$router.push(name);
      // update state in Vuex
    },
    loginBtn() {
      if (this.$store.getters.getLoginStatus) {
        // logout
        this.$store.dispatch("toggleLogin", { status: false });
        this.$store.dispatch("toggleUserView", { status: "home" });
        this.$router.push("/");
        // clear localstorage
        window.localStorage.clear();
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

