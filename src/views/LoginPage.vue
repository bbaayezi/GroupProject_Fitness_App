<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="#ffad33">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-btn slot="activator" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="login"
                label="Login"
                type="text"
                v-model="username"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="#757575" @click="register">Don't have a username?</v-btn>
            <v-btn class="mx-3 white--text" color="#ffad33" @click.prevent="submitForm">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <router-link to='/about'>Go to about</router-link> -->
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    // 涉及异步方法，如以下提交表单方法时，使用 async await 语法糖
    // 可有效减轻Promise回调地狱的情况
    async submitForm() {
      let res = await axios.post('http://test.scarlet-temp.tk/submitLogin', {
        username: this.username,
        password: this.password
      });
      console.log(res.data);
      if (res.data.authenticated) {
        this.$store.dispatch("toggleLogin", {status: true});
        this.$router.push("home");
      }
      // update state in Vuex
    },
    register() {
      this.$router.push("register");
    }
  }
};
</script>
