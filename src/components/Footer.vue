<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="white--text text-xs-center flex"
      color="#ffad33"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-5 white--text"
          icon
        >
          <v-icon size="36px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="subheading font-weight-medium white--text pt-0">
       Get connected with us on social networks!
       <br>
       Main office: University of Liverpool, Liverpool L69 3BX, United Kingdom
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class=" subheading white--text">
        &copy;2019 — <strong>Team 8</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
    }),
    methods:{
    }
    
  }
</script>