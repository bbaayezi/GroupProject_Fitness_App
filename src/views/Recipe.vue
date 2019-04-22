<template>
  <v-content>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-hover>
          <v-card
          slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      >
            <v-img
              src="https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/buying-healthy-foods-ft-blog0617.jpg?itok=fdrZyzB6"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out green darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            🍆
          </div>
        </v-expand-transition>
        </v-img>
            <v-card-title primary-title>
              <div class="display-2">Vegetables</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat @click="goAnchor()">DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          </v-hover>
        </v-flex>
        <v-flex xs12 md6>
          <v-layout row wrap>
            <v-flex xs12>
              <v-hover>
              <v-card
              slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto">
                <v-img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/super-food-for-healthy-eating-royalty-free-image-928553584-1549508731.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out yellow darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            🍉
          </div>
        </v-expand-transition>
                <v-card-title primary-title>
                  <div class="display-2">Fruits</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat @click="goAnchor()">DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
              </v-hover>
            </v-flex>
            <v-flex xs12>
              <v-hover>
              <v-card
              slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto">
                <v-img
                  src="https://stateofmind13.files.wordpress.com/2012/04/raw-meat.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                 <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            🍖
          </div>
        </v-expand-transition>
                <v-card-title primary-title>
                  <div class="display-2">Meats</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="blue" flat @click="goAnchor()">DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-hover>
          <v-card
          slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto">
            <v-img src="https://www.rd.com/wp-content/uploads/2018/06/healthy-food.jpg"></v-img>
             <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            🍽
          </div>
        </v-expand-transition>
            <v-card-title primary-title>
              <div class="display-2">Diet</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" @click="goAnchor()" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs12 mt-3>
          <md-card>
            <md-card-header data-background-color="orange">
              <h4 class="title">Nutrition Table</h4>
              <p class="category">Here is the nutrition list for the selected category</p>
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
    },
     goAnchor() {
       document.documentElement.scrollTop = 1500;
        },
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
