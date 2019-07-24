<template>
  <v-card min-width="760">
    <v-layout row justify-end>
      <v-flex xs2 class="mt-2 mb-2">
        <v-btn :color="job.color" style="color: #fff">Move</v-btn>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

    <v-card-title>
      <v-layout row>
        <v-flex xs1>
          <v-avatar class="mr-3">
            <v-img :src="`//logo.clearbit.com/${job.image}.com`"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex xs10>
          <span class="headline">{{ job.title }}</span
          ><br />
          <h3 style="color: #ccc;">{{ job.subTitle }}</h3>
        </v-flex>
        <v-flex xs1>
          <v-layout justify-end>
            <v-card-actions>
              <v-btn icon flat>
                <v-icon>more_horiz</v-icon>
              </v-btn>

              <v-btn icon flat>
                <v-icon fab @click="handleDialogClose()">close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="mt-0">
      <Tabs :job="job" :todos="job.todos" />
    </v-card-text>
  </v-card>
</template>

<script>
import Tabs from "./Tabs.vue";
export default {
  components: {
    Tabs
  },

  props: ["job", "dialogState"],

  data() {
    return {
      todos: [
        {
          title: "Follow up to find out status of application",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Prepare for phone interview",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Look for openings",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Prep for interview",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Prepare for interview",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Prepare for phone interview with leetcode",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Apply on website",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Send acceptance email!",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Send cover letter",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Send resume",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Email Edwin",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Fill out application",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        },
        {
          title: "Work on coding challenge",
          position: "Product Manager",
          image: "images/google-icon.svg",
          active: false
        }
      ]
    };
  },

  methods: {
    handleDialogClose: function() {
      this.$emit("clickedSth");
    }
  }
};
</script>
