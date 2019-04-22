<template>

  <v-content>
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs12 md6>
        
          
           <v-card>
           
            <div class="hover01">
            <figure>
            <v-img
              src="https://www.hel-theeliving.com/wp-content/uploads/2017/09/1636-Top-10-Weight-Loss-Machines-You-Should-Try-Out-ss.jpg"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            >
            
         </v-img></figure>
        
         
        
         </div>
            <v-card-title primary-title>
              <div class="display-2">Full-body</div>
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
            <div class="hover01">
            <figure>

               <v-img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-home-hiit-workouts-1554988024.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                > </v-img></figure>
        
         </div>
                
                <v-card-title primary-title>
                  <div class="display-2">Upper-body</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat>DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
              
            </v-flex>
            <v-flex xs12>
            
               <v-card>
            <div class="hover01">
            <figure>
               <v-img
                  src="https://pixfeeds.com/images/fitness/exercises/1280-487584856-woman-exercising-on-leg-press-machine.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                > </v-img></figure>
        
         </div>
                 
                <v-card-title primary-title>
                  <div class="display-2">Lower-body</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="blue" flat>DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
              
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
        
           <v-card>
            <div class="hover01">
            <figure>
            <v-img src="http://www.canadafitbodybootcamp.ca/calgarysoutheastfitnessbootcamp/wp-content/themes/fbbc-locationsite/img/FBBC-Plank.jpg"> </v-img></figure>
        
         </div>
             
            <v-card-title primary-title>
              <div class="display-2">Core</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          
        </v-flex>

<v-flex xs12 md6>
        
           <v-card>
            <div class="hover01">
            <figure>
            <v-img
              src="https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/02/Josie-Millard2.jpg"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            >
            
         </v-img></figure>
        
         </div>
            <v-card-title primary-title>
              <div class="display-2">Skating</div>
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
            <div class="hover01">
            <figure>
               <v-img
                  src="http://www.exmooradventures.co.uk/wp-content/uploads/2013/02/GOPR2380.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                > </v-img></figure>
        
         </div>
                
                <v-card-title primary-title>
                  <div class="display-2">Climbing</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="orange" flat>DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
              
            </v-flex>
            <v-flex xs12>
            
               <v-card>
            <div class="hover01">
            <figure>
               <v-img
                  src="https://www.bhliveactive.org.uk/wp-content/uploads/2017/05/swim-courses.jpg"
                  :aspect-ratio="isMobile ? 1.7 : 1.5"
                > </v-img></figure>
        
         </div>
                 
                <v-card-title primary-title>
                  <div class="display-2">Swimming</div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn color="blue" flat>DETAIL</v-btn>
                  </v-card-actions>
                </v-card-title>
              </v-card>
              
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
        
           <v-card>
            <div class="hover01">
            <figure>
            <v-img src="http://blogs.rdxsports.com/wp-content/uploads/2017/08/BANNER-Man-running-silhouette-Flipped1-672x372.jpg"> </v-img></figure>
        
         </div>
             
            <v-card-title primary-title>
              <div class="display-2">Running</div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn color="orange" flat>DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          
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
.hover01{
  overflow: hidden;
}
.hover01 figure {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.hover01 figure:hover{
	-webkit-transform: scale(1.3);
	transform: scale(1.3);
}
</style>
