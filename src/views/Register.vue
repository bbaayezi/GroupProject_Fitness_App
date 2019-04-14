<template>
<v-content>
  <v-form ref="form" v-model="valid" lazy-validation>
   <v-flex xs10 offset-xs1>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="  E-mail"
      required
    ></v-text-field>
     <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="  Password"
      required
    ></v-text-field>
     <v-select
     :rules="[v => !!v || 'Please select an option']"
          :items="genderList"
          v-model="gender"
          label="Select"
          required
        ></v-select>
    <v-radio-group 
              required
    v-model="row" row>
      <v-radio label="User" value="User" ></v-radio>
      <v-radio label="Trainer" value="Trainer"></v-radio>
    </v-radio-group>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
    </v-flex>
  </v-form>
  </v-content>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      gender:null,
      genderList: ['Male','Female','Decline to indicate'],
      valid: true,
      formChecked: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
        v => (v && v.length <= 16) || 'Password must be less than 16 characters',
        v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v) || 'Password must have at least one digit, one lower letter and one captial letter'
      ],
      checkbox: false,
      row: null
    }),
    computed: {
        
    },

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            password: this.password,
            checkbox: this.checkbox,
            gender: this.gender
          })
          this.$router.push('login')
        }
         
      },
      clear () {
        this.$refs.form.reset()
      }
    },
  }
</script>

