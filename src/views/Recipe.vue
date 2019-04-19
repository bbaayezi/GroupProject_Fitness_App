<template>
  <v-content>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-card>
            <v-img
              src="https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/buying-healthy-foods-ft-blog0617.jpg?itok=fdrZyzB6"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            ></v-img>
            <v-card-title primary-title>
              <div class="display-2">Vegetables</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 md6>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card>
                <v-img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/super-food-for-healthy-eating-royalty-free-image-928553584-1549508731.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                <v-card-title primary-title>
                  <div class="display-2">Fruits</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat>DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card>
                <v-img
                  src="https://stateofmind13.files.wordpress.com/2012/04/raw-meat.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                <v-card-title primary-title>
                  <div class="display-2">Meats</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat>DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-img src="https://www.rd.com/wp-content/uploads/2018/06/healthy-food.jpg"></v-img>
            <v-card-title primary-title>
              <div class="display-2">Diet</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs12 mt-3>
          <md-card>
            <md-card-header data-background-color="orange">
              <div class="display-2">Nutrition Table</div>
              <p class="category display-1">Here is the nutrition list for the selected category</p>
            </md-card-header>
            <md-card-content>
              <ordered-table table-header-color="orange"></ordered-table>
            </md-card-content>
          </md-card>
        </v-flex>
      </v-layout>
    </v-container>
    <br>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    isMobile: false
  }),
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960;
    }
  }
};
</script>
