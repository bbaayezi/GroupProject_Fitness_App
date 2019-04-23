<template>
  <div>
    <md-table v-model="users" @md-selected="onSelect">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <transition name="slide-fade">
          <md-table-cell v-if="show==0">{{ item.init }}</md-table-cell>
        </transition>
         <transition name="slide-fade">
          <md-table-cell v-if="show==2">{{ item.target }}</md-table-cell>
        </transition>
        <transition name="slide-fade">
          <md-table-cell v-if="show==3" class = "grey--text">{{ item.end }}</md-table-cell>
        </transition>
          <md-table-cell >
            <transition name="slide-fade" >
            <v-form v-if="show==1">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <v-text-field input id= 'target' name = 'target' label="Your target"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-btn flat class = "grey--text" @click="submit">submit</v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
           </transition>
          </md-table-cell>
       
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-danger" v-if="show==0" v-on:click="show = 1">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-primary" v-if="show==2" v-on:click="show = 3">
            <md-icon>done</md-icon>
            <md-tooltip md-direction="top">Done</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  data() {
    return {
      selected: [],
      show: 0,
      users: [
        {
          init: "Please add your target",
          target: "null",
          end: "You have finish your target today, come here tomorrow!"
        }
      ]
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    },
    submit(){
      this.show = 2;
      this.users[0].target = document.getElementById("target").value
    }
  }
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>