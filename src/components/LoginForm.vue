<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="#ffad33">
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-tooltip bottom>
        <v-btn slot="activator" icon large target="_blank">
        </v-btn>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          prepend-icon="person"
          name="login"
          label="Login"
          type="text"
          v-model="username"
          :rules="nameRules"
          required
        ></v-text-field>
        <v-text-field
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="password"
          :counter="16"
          :rules="passwordRules"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-layout column>
            <v-btn flat color="#757575" @click="register">Don't have an account?</v-btn>
       <google-sign-in @onAuthSuccess="oauthSuccess"></google-sign-in>
      </v-layout>
      <v-btn
        :disabled="!valid"
        class="mx-3 white--text"
        color="#ffad33"
        @click.prevent="submitForm"
      >Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import GoogleSignIn from "@/components/GoogleSignIn";
export default {
  data() {
    return {
      valid: true,
      username: "",
      nameRules: [v => !!v || "Name is required"],
      password: "",
      passwordRules: [
        v => !!v || "password is required",
        v => (v && v.length <= 16) || "name must be less than 16 characters"
      ]
    }
  },
  components: {
    GoogleSignIn
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
      let res = await this.$fitnessHttp.post("login", {
        name: this.username,
        password: this.password
      });
      
      if (res.status == 200) {
        console.log(res);
        this.$store.dispatch('toggleLogin', {status: true});
        this.$store.dispatch('setUserInfo', {name: this.username});
        this.$router.push("summary");
      }
      // update state in Vuex
    },
    register() {
      this.$router.push("register");
    },
    oauthSuccess() {
      console.log('Oauth success');
      console.log(`Setting oauth login`);
      this.$store.dispatch('setOauthLogin', true);
      this.$store.dispatch('toggleLogin', {status: true});
      this.$router.push('summary');
    }
  }
};
</script>

