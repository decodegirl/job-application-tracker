<template>
  <v-card flat v-if="page.tab_title == 'Job Info'">
    <v-card-text class="">
      <v-layout row wrap>
        <!-- General Info -->
        <v-flex xs6>
          <span class="title font-weight-regular">General Info</span>
          <v-layout row wrap>
            <v-flex xs3 class="pb-1">
              <span>Company </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.company"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Title </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.title"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Location </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.location"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Salary </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.salary"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Post URL </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.post_url"
                />
              </v-hover>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- Log Dates -->
        <v-flex xs6>
          <span class="title font-weight-regular">Log Dates</span>
          <v-layout row wrap>
            <v-flex xs3 class="pt-2">
              <span>Deadline </span>
            </v-flex>
            <v-flex xs9 class="pl-2">
              <DatePicker :job="job" :dateToLog="dateLogs[0]"></DatePicker>
            </v-flex>

            <v-flex xs3 class="pt-2">
              <span>Applied </span>
            </v-flex>
            <v-flex xs9 class="pl-2">
              <DatePicker :job="job" :dateToLog="dateLogs[1]"></DatePicker>
            </v-flex>

            <v-flex xs3 class="pt-2">
              <span>Interview 1 </span>
            </v-flex>
            <v-flex xs9 class="pl-2">
              <DatePicker :job="job" :dateToLog="dateLogs[2]"></DatePicker>
            </v-flex>

            <v-flex xs3 class="pt-2">
              <span>Interview 2 </span>
            </v-flex>
            <v-flex xs9 class="pl-2">
              <DatePicker :job="job" :dateToLog="dateLogs[3]"></DatePicker>
            </v-flex>

            <v-flex xs3 class="pt-2">
              <span>Offer </span>
            </v-flex>
            <v-flex xs9 class="pl-2">
              <DatePicker :job="job" :dateToLog="dateLogs[4]"></DatePicker>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12>
          <span>Description</span>
          <v-textarea
            outline
            class="ma-2"
            height="300px"
            v-model="job.description"
          ></v-textarea>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import DatePicker from "./DatePicker.vue";

export default {
  props: ["job", "page"],
  components: { DatePicker },
  data: function() {
    return {
      dateLogs: ["deadline", "applied", "interview1", "interview2", "offer"]
    };
  }
};
</script>
<style scoped>
input[type="text"] {
  letter-spacing: 1px;
  text-align: left;
}
</style>
