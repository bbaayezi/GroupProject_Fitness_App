<template>
<v-content>
    <v-layout class="justify-center">
    <div>
        <h2>Error</h2>
        <h3>no such page</h3>
        <p>There was no such page on our website. Please search again.</p>
    </div>
    </v-layout>
    <v-layout class="justify-center">
        <v-btn small color="error" @click="jump('home')">Go back</v-btn>
    </v-layout>
    
</v-content>
    
    
</template>
<script>
export default {
    methods:{
    jump(name) {
      this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(name);
      // update state in Vuex
      
    },
    }
}
</script>
