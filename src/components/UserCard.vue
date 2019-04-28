<template>
  <md-card class='md-card-profile'>
    <div class='md-card-avatar'>
      <img class='img' :src='cardUserImage'>
    </div>

    <md-card-content>
      <h6 class='category text-gray'>User</h6>
      <h4 class='card-title'>{{getUserInfo.name}}</h4>
      <p class='card-description'>Age: {{getUserInfo.age}} Gender: {{getUserInfo.sex}}</p>

      <!-- <p class='card-description'>Gender: {{infoList.gender}}</p> -->
      <p class='card-description'>Height: {{getUserInfo.height}} Weight: {{getUserInfo.weight}}</p>
      <!-- <p class='card-description'>Weight: {{infoList.weight}}</p> -->
      <p class='card-description'>Mail: {{getUserInfo.email}}</p>
      <v-layout justify-space-around>
        <v-flex xs12 sm6 md3 v-if='!show'>
          <v-text-field label='Age' v-model='editable.age'></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3 v-if='!show'>
          <v-text-field label='Height' v-model='editable.height'></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3 v-if='!show'>
          <v-text-field label='Weight' v-model='editable.weight'></v-text-field>
        </v-flex>
      </v-layout>
      <md-button class='md-round md-success' @click='edit' v-if="!getOauthStatus">Edit</md-button>
      <md-button class='md-round md-success' @click='updateUserInfo' v-if='!show && !getOauthStatus'>Update</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'user-card',
  props: {
    cardUserImage: {
      type: String,
      default:
        'https://avataaars.io/?avatarStyle=Transparent&hairColor=orange&facialHairType=Blank&clotheType=Hoodie&clotheColor=red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
    }
  },
  data() {
    return {
      show: true,
      editable: {
        age: null,
        height: null,
        weight: null
      }
    };
  },
  methods: {
    edit() {
      this.show = !this.show;
      this.editable.age = this.$store.getters.getUserInfo.age;
      this.editable.height = this.$store.getters.getUserInfo.height;
      this.editable.weight = this.$store.getters.getUserInfo.weight;
    },
    updateUserInfo() {
      let info = {
        age: this.editable.age,
        height: this.editable.height,
        weight: this.editable.weight
      };
      this.$fitnessHttp
        .post(`updateuser`, info)
        .then(res => {
          if (res.status == 200) {
            console.log('update successful');
            this.$store.dispatch('setUserInfo', info);
          }
        })
        .catch(err => console.log(err));
      this.show = !this.show;
    }
  },
  computed: {
    ...mapGetters(['getUserInfo','getOauthStatus'])
  }
};
</script>