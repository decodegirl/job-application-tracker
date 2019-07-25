<template>
  <v-card flat v-if="page.tab_title == 'Leads'" class="ma-4">
    <v-layout row align-center justify-center>
      <v-flex xs12 height="400px" class="text-xs-center">
        <v-icon large>group</v-icon>
        <v-card-text>
          You have no saved leads for this company yet
        </v-card-text>
        <v-btn rounded :color="job.color" style="color: #fff">
          Search directory
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["job", "page"]
};
</script>

<style>
</style>
