<template>
  <md-card class="md-card-profile">
    <md-card-content>
      <!-- <h6 class="category text-gray">User</h6> -->
      <h4 class="card-title display-1">Recommendation</h4>
      <v-form v-model="valid">
        <v-container>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md3>
              <v-text-field v-model="age" label="Age" required :rules="ageRules"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field v-model="height" label="Height" required :rules="heightRules"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field v-model="weight" label="Weight" required :rules="weightRules"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field v-model="stepCount" label="Step Count" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </md-card-content>
    <v-btn>Auto Fill</v-btn>
    <v-btn @click="evaluate">Submit</v-btn>
    <br>
    <md-card-content class="display-1">
      {{result}}
    </md-card-content>
  </md-card>
</template>
<script>
import tree from "@/decisionTree.js";
export default {
  name: "user-card",
  data() {
    return {
      valid: false,
      stepCount: "",
      age: "",
      ageRules: [
        v => !!v || 'Age is Required'
      ],
      height: "",
      heightRules: [
        v => !!v || 'Height is Required'
      ],
      weight: "",
      weightRules: [
        v => !!v || 'Weight is Required'
      ],
      result: ""
    };
  },
  methods: {
    evaluate() {
      if (this.valid) {
        try {
          this.result = tree.withStepsRecommendation(this.height, this.weight, this.age, this.stepCount);
        } catch (err) {
          this.result = tree.withoutStepsRecommendation(this.height, this.weight, this.age);
        }
        // if (stepCount == undefined) {
        //   this.result = tree.withoutStepsRecommendation(this.height, this.weight, this.age);
        // } else {
        //   this.result = tree.withStepsRecommendation(this.height, this.weight, this.age, this.stepCount);
        // }
      }
    }
  }
};
</script>