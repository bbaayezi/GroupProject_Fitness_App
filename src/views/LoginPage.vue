<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <v-btn 
                                slot="activator"
                                icon
                                large
                                target="_blank"
                            >
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
                        <v-btn color="primary" @click.prevent="submitForm">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <!-- <router-link to='/about'>Go to about</router-link> -->
    </v-container>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: Number
        }
    },
    methods: {
        submitForm() {
            // TODO: submit form operation
            // if validated, navigate to another page

            // post login form
            
            // axios.post('http://localhost:3000/submitLogin', {
            //     username: this.username,
            //     password: this.password
            // }).then(res => {
            //     // TODO: use res.data to update state in Vuex
            //     // in Vuex actions, create local storage as well
                
            // })
            
            this.$store.dispatch('login', true)
            this.$router.push('home')
            // update state in Vuex
            
        }
    }
}
</script>
