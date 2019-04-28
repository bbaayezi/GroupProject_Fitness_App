<template>
  <v-footer
    height="auto"
    class="pa-0"
  >
    <v-card
      flat
      tile
      class="white--text text-xs-center flex"
      color="#ffad33"
    >
      <v-card-text>
        <v-btn
          v-for="(item,index) in icons"
          :key="icons[index].icon"
          class="mx-5 white--text"
          icon
          @click="See(icons[index].link)"
        >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
             <v-icon size="36px" color="white">{{ icons[index].icon }}</v-icon>
          </v-btn>
           </template>
          <span>{{icons[index].tip}}</span>
        </v-tooltip>
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
        {icon:'fab fa-twitter',link:'https://twitter.com/', tip:'twitter'},
        {icon:'fab fa-google-plus',link:'https://plus.google.com/', tip:'google+'},
        {icon:'fab fa-linkedin',link:'https://www.linkedin.com/', tip: 'linkedin'},
        {icon:'fab fa-instagram',link:'https://www.instagram.com/', tip: 'instagram'}
       // 'fab fa-twitter',
        //'fab fa-google-plus',
       // 'fab fa-linkedin',
       // 'fab fa-instagram'
      ],
    }
    ),
    
    methods:{
          See(e) {
        window.location.href = e
      }
    }

  }
</script>