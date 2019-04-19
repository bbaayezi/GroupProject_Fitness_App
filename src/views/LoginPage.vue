<template>
<v-content>
  <v-container fluid fill-height>
    <v-layout bg :style="note">
    </v-layout>
    <v-layout align-center justify-center class="content-front">
    <v-layout align-center content-front white--text>
      <v-flex offset-md2>
      <div class = "display-3 font-weight-bold wordColor ">how to build <v-spacer/> your body?</div>
      </v-flex>
      </v-layout>
      <v-flex xs12 sm8 md4 offset-md5>
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
            <v-btn flat color="#757575" @click="register">Don't have a username?</v-btn>
            <v-btn
              :disabled="!valid"
              class="mx-3 white--text"
              color="#ffad33"
              @click.prevent="submitForm"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <router-link to='/about'>Go to about</router-link> -->
  </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      note: {
        backgroundImage:
          "url(http://bpic.588ku.com/back_pic/05/58/29/655b2f11ce6732f.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      valid: true,
      username: "",
      nameRules: [v => !!v || "Name is required"],
      password: "",
      passwordRules: [
        v => !!v || "password is required",
        v => (v && v.length <= 16) || "name must be less than 16 characters"
      ]
    };
  },
  methods: {
    // 涉及异步方法，如以下提交表单方法时，使用 async await 语法糖
    // 可有效减轻Promise回调地狱的情况
    async submitForm() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
      let res = await axios.post("http://test.scarlet-temp.tk/submitLogin", {
        username: this.username,
        password: this.password
      });
      console.log(res.data);
      if (res.data.authenticated) {
        this.$store.dispatch("toggleLogin", { status: true });
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
<style>
.bg {
  filter: blur(8px);
}
.content-front {
  position: absolute;
  left: 10px;
  right: 10px;
  height: 600px;
}
.wordColor{
  color: #bdbdbd;
}
</style>
