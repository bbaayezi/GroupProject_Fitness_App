<template>
  <md-card class="md-card-profile">

    <md-card-content>
      <!-- <h6 class="category text-gray">User</h6> -->
      <h4 class="card-title">Recommendation</h4>
      <div class="display-3">
        
      </div>
    </md-card-content>
  </md-card>
</template>
<script>
import tree from '@/decisionTree.js';
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