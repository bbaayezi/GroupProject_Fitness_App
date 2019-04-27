<template>
  <v-content>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Select an app
        <small>Summarize if needed</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card color="white lighten-1" class="mb-5" height="400px">
          <v-form ref="form1">
            <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="  E-mail" required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" label="  Password" required></v-text-field>
            <v-select
              :rules="[v => !!v || 'Please select an option']"
              :items="genderList"
              v-model="gender"
              label="Sex"
              required
            ></v-select>
            <v-btn color="primary" :disabled="!valid" @click="submitStep1">Continue</v-btn>
            <v-btn flat @click="clear">Clear</v-btn>
            <google-sign-in></google-sign-in>
          </v-form>
        </v-card>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="white lighten-1" class="mb-5" height="300px">
          <v-form ref="form2">
            <v-text-field v-model="height" label="Height" hint="optional"></v-text-field>
            <v-text-field v-model="weight" label="Weight" hint="optional"></v-text-field>
            <v-text-field v-model="age" label="Age" hint="optional"></v-text-field>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn flat>Cancel</v-btn>
          </v-form>
        </v-card>
      </v-stepper-content>

      <v-stepper-step step="3">View setup instructions</v-stepper-step>
      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-content>
</template>

<script>
import axios from "axios";
import GoogleSignIn from "@/components/GoogleSignIn";
export default {
  data: () => ({
    e6: 1,
    height: null,
    weight: null,
    age: null,
    gender: null,
    genderList: ["Male", "Female", "Decline to indicate"],
    valid: true,
    formChecked: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 8) || "Password must be more than 8 characters",
      v => (v && v.length <= 16) || "Password must be less than 16 characters",
      v =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v) ||
        "Password must have at least one digit, one lower letter and one captial letter"
    ],
    row: null
  }),
  computed: {},
  components: {
    GoogleSignIn
  },

  methods: {
    submitStep1() {
      if (this.$refs.form1.validate()) {
        this.e6 = 2;
      }
    },
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
          password: this.password,
          checkbox: this.checkbox,
          sex: this.gender,
          age: this.age,
          height: this.height,
          weight: this.weight
        });
        this.$router.push("login");
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

