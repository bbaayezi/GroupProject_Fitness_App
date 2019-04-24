<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage">
    </div>

    <md-card-content>
      <h6 class="category text-gray">User</h6>
      <h4 class="card-title">{{infoList.name}}</h4>
      <p class="card-description">Age: {{infoList.age}} Gender: {{infoList.gender}}</p>

      <!-- <p class="card-description">Gender: {{infoList.gender}}</p> -->
      <p class="card-description">Height: {{infoList.height}} Weight: {{infoList.weight}}</p>
      <!-- <p class="card-description">Weight: {{infoList.weight}}</p> -->
      <p class="card-description">Mail: {{infoList.mail}}</p>
      <v-layout justify-space-around>
            <v-flex xs12 sm6 md3 v-if="!show">
          <v-text-field 
            label="Age"
            v-model="infoList.age"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3 v-if="!show">
          <v-text-field
            label="Height"
            v-model="infoList.height"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3 v-if="!show">
          <v-text-field
            label="Weight"
            v-model="infoList.weight"
          ></v-text-field>
        </v-flex>
        </v-layout>
      <md-button class="md-round md-success" @click = "edit">{{show? "Edit":"Finish"}}</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default:
        "https://avataaars.io/?avatarStyle=Transparent&hairColor=orange&facialHairType=Blank&clotheType=Hoodie&clotheColor=red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
    },
  },
  data() {
    return {
      show: true,
      infoList: {
        ID: 123456,
        name: "Mike",
        age: 20,
        gender: "Male",
        height: 180,
        weight: 120,
        identity: "User",
        mail: "mike@gmail.com",
        img:
          "https://avataaars.io/?avatarStyle=Transparent&hairColor=orange&facialHairType=Blank&clotheType=Hoodie&clotheColor=red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
      }
    };
  },
  methods:{
    edit(){
      this.show = !this.show;
      if(this.show == false){
         axios.post(`http://test.scarlet-temp.tk/update-user-data?name=${infoList.name}`, {
          age: this.infoList.age,
          height: this.infoList.height,
          weight: this.infoList.weight
        })
      }
    }
  }
};
</script>