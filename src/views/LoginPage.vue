<template>
  <v-content>
    <div class="hidden-md-and-up px-2 pt-3">
      <v-layout justify-center>
        <div>
          <p>SIGN IN WITH USERNAME</p>
        </div>
      </v-layout>

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
        <v-btn block flat color="#757575" @click="register">Don't have a username?</v-btn>
        <v-btn
          block
          :disabled="!valid"
          class="white--text"
          color="#ffad33"
          @click.prevent="submitForm"
        >Login</v-btn>
      </v-form>
    </div>
    <v-container fluid fill-height class="hidden-sm-and-down">
      <v-layout bg :style="note"></v-layout>
      <v-layout align-center justify-center class="content-front">
        <v-layout align-center content-front white--text>
          <v-flex offset-md2>
            <div class="display-3 font-weight-bold wordColor">
              how to build
              <v-spacer/>your body?
            </div>
          </v-flex>
        </v-layout>
        <v-flex xs12 sm8 md4 offset-md5>
          <login-form></login-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import LoginForm from "@/components/LoginForm";
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
  components: {
    LoginForm
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
.wordColor {
  color: #bdbdbd;
}
</style>
