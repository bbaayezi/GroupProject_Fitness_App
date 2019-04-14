<template>
  <v-content>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <v-flex v-for="(Info, id) in getInfoList" :key="id" xs12 sm8 md4>
    <InfoCard :ID="Info.ID" :name="Info.name" :age="Info.age" :gender="Info.gender" :height="Info.height" :weight="Info.weight" :identity="Info.identity" :mail="Info.mail" :imgSrc="Info.img"/>
    </v-flex>
    <Calendars/>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import InfoCard from "../components/InfoCard";
import Calendars from "../components/Calendars";

export default {
  data() {
    return {
      
    };
  },
  components: {
    InfoCard,
    Calendars
  },
  computed: {
    ...mapGetters([
      "getInfoList",
    ])
  }
};
</script>