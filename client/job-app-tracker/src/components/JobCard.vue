<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      xs12
      dark
      :color="job.color"
      max-width="400"
      class="mb-2"
    >
      <v-list-tile :class="job.color" class="pt-2">
        <v-list-tile-avatar :size="24" class="pb-2">
          <v-img
            :src="`//logo.clearbit.com/${job.image}.com`"
            alt="avatar"
          ></v-img>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title class="font-weight-regular">
            {{ job.title }}
          </v-list-tile-title>
          <v-list-tile-sub-title class="font-weight-light">
            {{ job.subTitle }}
          </v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action v-if="hover">
          <v-btn icon ripple>
            <v-icon color="grey lighten-1"> delete </v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile-content
        class="text-xs-right pr-3 pt-4 pb-1"
        :class="job.color"
      >
        <v-list-tile-sub-title class="font-weight-light caption">
          added {{ job.date_added }} ago
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-card>
  </v-hover>
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
