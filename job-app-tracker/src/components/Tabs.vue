<template>
  <v-container fill-height pa-0 ma-0>
    <v-layout row>
      <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
        <v-item v-for="(page, index) in pages" :key="index">
          <div slot-scope="{ active, toggle }">
            <v-btn
              :input-value="active"
              color="#000"
              flat
              @click="toggle"
              class="ma-0 pa-0"
              style="width: 200px;"
            >
              {{ page.tab_title }}
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-flex>
        <v-window
          v-model="window"
          class=""
          vertical
          style="height: 400px; overflow: scroll; border-left: 1px solid #ccc;"
        >
          <v-window-item v-for="(page, index) in pages" :key="index">
            <!-- Job Info -->
            <JobInfo :job="job" :page="page"></JobInfo>
            <!-- Tasks -->
            <Tasks :job="job" :page="page"></Tasks>

            <!-- Notes -->
            <Notes :job="job" :page="page"></Notes>

            <!-- Company -->
            <Company :job="job" :page="page"></Company>

            <!-- Directory -->
            <Directory :job="job" :page="page"></Directory>

            <!-- Leads -->
            <Leads :job="job" :page="page"></Leads>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobInfo from "./dialog/JobInfo.vue";
import Tasks from "./dialog/Tasks.vue";
import Notes from "./dialog/Notes.vue";
import Company from "./dialog/Company.vue";
import Directory from "./dialog/Directory.vue";
import Leads from "./dialog/Leads.vue";

export default {
  components: { JobInfo, Tasks, Notes, Company, Directory, Leads },

  props: ["job", "todos"],

  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    new_todo_input: "",
    pages: [
      {
        tab_title: "Job Info"
      },
      {
        tab_title: "Tasks"
      },
      {
        tab_title: "Notes"
      },
      {
        tab_title: "Company"
      },
      {
        tab_title: "Directory"
      },
      {
        tab_title: "Leads"
      }
    ],
    window: 0
  })
};
</script>
