<template>
  <v-card flat v-if="page.tab_title == 'Directory'" class="ma-4">
    <v-layout row wrap>
      <v-flex xs6>
        <h1 class="display-1 pb-3 pr-4">
          Get through to real people
        </h1>
        <p class="pr-4">
          Find contact information for people who work at Reddit. Search by
          role, so you can get your resume in front of the most appropriate
          person. Results include email, names, titles, and even social media
          profiles.
        </p>
      </v-flex>

      <v-flex xs6>
        <v-card>
          <v-layout row>
            <v-flex xs2>
              <v-list-tile-avatar class="pa-3">
                <v-img
                  large
                  flat
                  left
                  :src="job.image"
                  height="30px"
                  contain
                ></v-img>
              </v-list-tile-avatar>
            </v-flex>
            <v-flex xs10>
              <v-card-title
                >Billy McMahon<br />
                Human Resources</v-card-title
              >
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-text>
            <p><v-icon>email </v-icon> billymcmahon@email.com</p>
            <p><v-icon>place </v-icon> Mountain View, CA, USA</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-layout row justify-center>
            <v-flex xs4>
              <v-card-actions class="text-xs-center">
                <v-icon> delete</v-icon>
                <v-icon> more_horiz</v-icon>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 class="text-xs-center ma-4">
        <v-btn rounded :color="job.color" style="color: #fff"
          >Sign up for free</v-btn
        >
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
