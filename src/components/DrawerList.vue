<template>
  <v-card >
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      dark
      shift
      fixed
    >
      <v-btn dark flat @click="jump('home')">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn dark flat @click="jump('course')">
        <span>Course</span>
        <v-icon>directions_bike</v-icon>
      </v-btn>

      <v-btn dark flat @click="jump('recipe')">
        <span>Recipe</span>
        <v-icon>restaurant</v-icon>
      </v-btn>

      <v-btn dark flat @click="jump('summary')" v-if = "getLoginStatus">
        <span>UserInfo</span>
        <v-icon>perm_identity</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
  export default {
    data () {
      return {
        isLogedIn: this.$store.getters.getLoginStatus,
        bottomNav: 3
      }
    },
    methods: {
      jump(name) {
      this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(name);
      // update state in Vuex
      
    },
    },

    computed: {
    ...mapGetters(["getLoginStatus"]),
    ...mapGetters(["getUserCurrentView"]),
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
  }
</script>


