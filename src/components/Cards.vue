<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2>
      <v-card>
        <v-img
          :src="imageSrc"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas saepe nisi totam vero expedita animi quos dolorem consequatur eaque. Tenetur sequi maiores perferendis hic iste esse expedita excepturi eaque quos!
            </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data() {
        return {
            // imageSrc: 
        }
    },
    props: [
        'imageSrc', 'title'
    ]
}
</script>
