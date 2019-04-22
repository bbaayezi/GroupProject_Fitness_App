<template>
  <v-content>
    <br>
 <v-subheader inset><div class = "headline orange--text" >Indoor</div></v-subheader>
 <v-divider inset></v-divider> 
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
              src="https://www.hel-theeliving.com/wp-content/uploads/2017/09/1636-Top-10-Weight-Loss-Machines-You-Should-Try-Out-ss.jpg"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
        </v-img>
            <v-card-title primary-title>
              <div class="display-2">Full-body</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
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
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-home-hiit-workouts-1554988024.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
                <v-card-title primary-title>
                  <div class="display-2">Upper-body</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat>DETAIL</v-btn>
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
                  src="https://pixfeeds.com/images/fitness/exercises/1280-487584856-woman-exercising-on-leg-press-machine.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                 <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
                <v-card-title primary-title>
                  <div class="display-2">Lower-body</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="blue" flat>DETAIL</v-btn>
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
            <v-img src="http://www.canadafitbodybootcamp.ca/calgarysoutheastfitnessbootcamp/wp-content/themes/fbbc-locationsite/img/FBBC-Plank.jpg"></v-img>
             <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
          </div>

        </v-expand-transition>
            <v-card-title primary-title>
              <div class="display-2">Core</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          </v-hover>
        </v-flex>
</v-layout>
</v-container>

 <v-subheader inset><div class = "headline orange--text" >Outdoor</div></v-subheader>
 <v-divider inset></v-divider> 
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
              src="https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/02/Josie-Millard2.jpg"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
        </v-img>
            <v-card-title primary-title>
              <div class="display-2">Skating</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
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
                  src="http://www.exmooradventures.co.uk/wp-content/uploads/2013/02/GOPR2380.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
                <v-card-title primary-title>
                  <div class="display-2">Climbing</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat>DETAIL</v-btn>
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
                  src="https://www.bhliveactive.org.uk/wp-content/uploads/2017/05/swim-courses.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                ></v-img>
                 <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
                <v-card-title primary-title>
                  <div class="display-2">Swimming</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="blue" flat>DETAIL</v-btn>
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
            <v-img src="http://blogs.rdxsports.com/wp-content/uploads/2017/08/BANNER-Man-running-silhouette-Flipped1-672x372.jpg"></v-img>
             <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition>
            <v-card-title primary-title>
              <div class="display-2">Running</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          </v-hover>
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

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}
.line_05{letter-spacing:-1px;color:#ddd}
.line_05 span{letter-spacing:0;color:#222;margin:0 20px}

</style>
