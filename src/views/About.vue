<template>
  <v-content>
    <br>
    <div class="display-3 font-weight-bold orange--text text-md-center">My Information</div>
    <br><br><br>
    <v-layout row wrap>
      <v-flex v-for="(Info, id) in getInfoList" :key="id" xs12 sm8 md4 offset-xs1>
        <!-- <div class="display-1 font-weight-bold orange--text text-md-center">My Card</div> -->
        <br>
        <InfoCard
          :ID="Info.ID"
          :name="Info.name"
          :age="Info.age"
          :gender="Info.gender"
          :height="Info.height"
          :weight="Info.weight"
          :identity="Info.identity"
          :mail="Info.mail"
          :imgSrc="Info.img"
        />
      </v-flex>

      <v-flex md6>
        <!-- <v-flex  offset-md4> -->
        <!-- <div class="display-1 font-weight-bold orange--text">My Record</div> -->
        <!-- </v-flex> -->
        <br>
        <RecordCard/>
      </v-flex>

      <v-flex offset-xs1>
        <br><br>
        <RecordTable/>
      </v-flex>

      <v-flex offset-xs2>
        <br><br>
        <!-- <div class="display-1 font-weight-bold orange--text">My Exercise Record</div> -->
        <Calendars/>
      </v-flex>
      
      
    </v-layout>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import InfoCard from "../components/InfoCard";
import Calendars from "../components/Calendars";
import RecordCard from "../components/RecordCard";
import RecordTable from "../components/RecordTable";

export default {
  data() {
    return {};
  },
  components: {
    InfoCard,
    Calendars,
    RecordCard,
    RecordTable
  },
  computed: {
    ...mapGetters(["getInfoList"])
  }
};
</script>