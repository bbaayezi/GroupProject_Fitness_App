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
      <md-button class="md-round md-success">Follow</md-button>
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
  }
};
</script>