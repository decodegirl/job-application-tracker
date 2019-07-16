<template>
  <v-container>
    <v-layout>
      <v-flex xs6>
        <v-card flat="false">
          <v-list>
            <draggable
              :list="jobs1"
              group="occupation"
              :disabled="!enabled"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <div v-for="job in jobs1" :key="job.title">
                <JobCard :job="job" :color="job.color" />
              </div>
            </draggable>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card flat="false">
          <v-list>
            <draggable
              :list="jobs2"
              group="occupation"
              :disabled="!enabled"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <div v-for="job in jobs2" :key="job.title">
                <JobCard :job="job" :color="job.color" />
              </div>
            </draggable>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import draggable from "vuedraggable";
import JobCard from "../components/JobCard.vue";

export default {
  components: {
    draggable,
    JobCard
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      damis: 1,
      jobs1: [
        {
          color: "green",
          title: "Google",
          subtitle: "Product Manager",
          date_added: "2 Years",
          image: "./assets/logo.svg"
        },
        {
          color: "blue",
          title: "Twitter",
          subtitle: "Product Manager",
          date_added: "2 Years",
          image: "./assets/logo.svg"
        },
        {
          color: "yellow",
          title: "WeWork",
          subtitle: "Product Manager",
          date_added: "2 Years",
          image: "./assets/logo.svg"
        },
        {
          color: "purple",
          title: "Weave",
          subtitle: "Product Manager",
          date_added: "2 Years",
          image: "./assets/logo.svg"
        }
      ],
      jobs2: [
        {
          color: "indigo",
          title: "We Work",
          subtitle: "SWE Intern",
          date_added: "1 Year",
          image: "./assets/logo.svg"
        },
        {
          color: "purple",
          title: "Hashcorp",
          subtitle: "Backend Engineer",
          date_added: "2 Years",
          image: "./assets/logo.svg"
        },
        {
          color: "black",
          title: "Postmates",
          subtitle: "Product Manager",
          date_added: "2 Years",
          image: "./assets/logo.svg"
        }
      ]
    };
  },

  methods: {
    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
    }
  }
};
</script>
