<template>
  <v-card xs12 dark :color="job.color" max-width="400" class="mb-2">
    <v-list-tile class="job-card">
      <v-list-tile-avatar></v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>{{ job.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ job.subtitle }}</v-list-tile-sub-title>
      </v-list-tile-content>

      <v-card-actions>
        <v-list-tile class="grow">
          <v-layout align-center justify-end>
            <v-btn icon fab>
              <v-icon class="mr-1">mdi-delete</v-icon>
            </v-btn>
          </v-layout>
        </v-list-tile>
      </v-card-actions>
    </v-list-tile>

    <v-card-text class="text-xs-right"
      >added {{ job.date_added }} ago</v-card-text
    >
  </v-card>
</template>

<script>
export default {
  name: "JobCard",
  props: ["job"],
  data: function() {
    return {};
  }
};
</script>

<style></style>
