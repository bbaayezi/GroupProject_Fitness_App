<template>

  <v-content>
    <br>
 <v-subheader inset><div class = "headline orange--text" >Indoor</div></v-subheader>
 <v-divider inset></v-divider> 
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs12 md6>
        
          
           <v-card>
           
            <div class="hover01">
            <figure>
            <v-img
              src="https://www.johnsonfitness.com/blog/app/uploads/2017/11/Jfit-Blog-elliptical.jpg"
              :aspect-ratio="isMobile ? 1.7 : 0.64"
            >
            
         </v-img></figure>
        
         
        
         </div>
            <v-card-title primary-title>
              <div class="display-2">Full-body</div>
              <v-spacer></v-spacer>
              <v-card-actions>
               <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
                    <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
                    <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
                <v-btn class="btn btn--stripe">DETAIL</v-btn>
              </v-card-actions>
            </v-card-title>
          </v-card>
          
        </v-flex>
</v-layout>
</v-container>

 <v-subheader inset><div class = "headline orange--text" >Outdoor</div></v-subheader>
 <v-divider inset></v-divider> 
<v-container grid-list-md fluid>
<v-layout row wrap>
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
                <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
                    <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
                    <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
                <v-btn class="btn btn--stripe">DETAIL</v-btn>
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
.style-two {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}
.line_05{letter-spacing:-1px;color:#ddd}
.line_05 span{letter-spacing:0;color:#222;margin:0 20px}

@-webkit-keyframes stripe-slide {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
@keyframes stripe-slide {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
body {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
}

.btn {
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  -moz-user-select: text;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 36px 22px;
  background-color: rgb(0, 110, 255);
  color: rgb(0, 110, 255);
  border: 2px solid rgb(0, 110, 255);
  border-radius: 6px;
  margin-bottom: 16px;
  transition: all .5s ease;
}
.btn:-moz-focus-inner {
  padding: 0;
  border: 0;
}
.btn--stripe {
  font-weight: bold;
  overflow: hidden;
  position: relative;
}
.btn--stripe:after {
  content: '';
  display: block;
  height: 7px;
  width: 100%;
  background-image: repeating-linear-gradient(45deg, #666, #666 1px, transparent 2px, transparent 5px);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-top: 1px solid rgb(0, 110, 255);
  position: absolute;
  left: 0;
  bottom: 0;
  background-size: 7px 7px;
}
.btn--stripe:hover {
  background-color: rgb(0, 110, 255);
  color: rgb(0, 110, 255);
  border-color: rgb(0, 110, 255);
}
.btn--stripe:hover:after {
  background-image: repeating-linear-gradient(45deg, rgb(0, 0, 0), rgb(0, 0, 0) 1px, transparent 2px, transparent 5px);
  border-top: 1px solid rgb(0, 110, 255);
  -webkit-animation: stripe-slide 12s infinite linear forwards;
          animation: stripe-slide 12s infinite linear forwards;
}
.btn--large {
  width: 50%;
}
.btn--radius {
  border-radius: 36px;
}
/* *, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #333;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.buttons {
  margin-top: 20px;
  text-align: center;
}

.blob-btn {
  z-index: 1;
  position: relative;
  padding: 10px 46px 30px 46px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #0fe0f5;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
}
.blob-btn:before {
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 6px solid #0fe0f5;
}
.blob-btn:after {
  content: "";
  z-index: -2;
  position: absolute;
  left: 9px;
  top: 9px;
  width: 100%;
  height: 100%;
  
  transition: all 0.3s 0.2s;
}
.blob-btn:hover {
  color: #222;
}
.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
}
.blob-btn__inner {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.blob-btn__blobs {
  position: relative;
  display: block;
  height: 100%;
  -webkit-filter: url("#goo");
          filter: url("#goo");
}
.blob-btn__blob {
  position: absolute;
  top: 6px;
  width: 25%;
  height: 100%;
  background: #0fe0f5;
  border-radius: 100%;
  -webkit-transform: translate3d(0, 150%, 0) scale(1.7);
          transform: translate3d(0, 150%, 0) scale(1.7);
  transition: -webkit-transform 0.45s;
  transition: transform 0.45s;
  transition: transform 0.45s, -webkit-transform 0.45s;
}
@supports ((-webkit-filter: url("#goo")) or (filter: url("#goo"))) {
  .blob-btn__blob {
    -webkit-transform: translate3d(0, 150%, 0) scale(1.4);
            transform: translate3d(0, 150%, 0) scale(1.4);
  }
}
.blob-btn__blob:nth-child(1) {
  left: 0%;
  transition-delay: 0s;
}
.blob-btn__blob:nth-child(2) {
  left: 30%;
  transition-delay: 0.08s;
}
.blob-btn__blob:nth-child(3) {
  left: 60%;
  transition-delay: 0.16s;
}
.blob-btn__blob:nth-child(4) {
  left: 90%;
  transition-delay: 0.24s;
}
.blob-btn:hover .blob-btn__blob {
  -webkit-transform: translateZ(0) scale(1.7);
          transform: translateZ(0) scale(1.7);
}
@supports ((-webkit-filter: url("#goo")) or (filter: url("#goo"))) {
  .blob-btn:hover .blob-btn__blob {
    -webkit-transform: translateZ(0) scale(1.4);
            transform: translateZ(0) scale(1.4);
  }
} */
</style>
