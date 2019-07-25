<template>
  <v-card flat v-if="page.tab_title == 'Notes'">
    <v-textarea
      outline
      class="mt-3 ml-3 mr-3 mb-0"
      height="200px"
      v-model="job.notes"
    ></v-textarea>
    <v-btn class="ml-3" rounded :color="job.color" style="color: #fff"
      >Save</v-btn
    >
  </v-card>
</template>

<script>
export default {
  props: ["job", "page"]
};
</script>

<style>
</style>
