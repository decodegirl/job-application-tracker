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
            <v-flex xs3 class="pb-1">
              <span>Deadline </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.deadline"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Applied </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.applied"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Interview 1 </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.interview1"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Interview 2 </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.interview2"
                />
              </v-hover>
            </v-flex>

            <v-flex xs3 class="pb-1">
              <span>Offer </span>
            </v-flex>
            <v-flex xs9 class="pb-1">
              <v-hover v-slot:default="{ hover }">
                <input
                  class="font-weight-light"
                  type="text"
                  v-model="job.offer"
                />
              </v-hover>
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
export default {
  props: ["job", "page"]
};
</script>
<style scoped>
input[type="text"]:focus,
input[type="text"]:hover {
  background-color: #eeeeee;
}
</style>
