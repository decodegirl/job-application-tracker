<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="updatedDate"
        label=""
        readonly
        v-on="on"
        height="15"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn
        text
        color="primary"
        @click="
          $refs.menu.save(date);
          saveDate();
        "
        >OK</v-btn
      >
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["job", "dateToLog"],
  data: function() {
    return {
      date: new Date().toISOString().substring(0, 10),
      dateUpdated: false,
      menu: false,
      modal: false,
      menu2: false
    };
  },
  methods: {
    saveDate: function() {
      this.job[this.dateToLog] = this.date;
    }
  },
  computed: {
    updatedDate: function() {
      // make sure the text field shows the updated field on start up
      // and when a new date is picked, it should be reactive(text field should
      // change as different dates are picked)
      // if (this.dateToLog == "date") {
      //   const todoLength = this.job.todos.length();
      //   if (this.job.todos[todoLength].date !== "+ set date" && !this.dateUpdated) {
      //     this.date = this.job.todos[todoLength].date;
      //   } else if (
      //     this.job.todos[todoLength].date === "+ set date" &&
      //     !this.dateUpdated
      //   ) {
      //     this.date = "";
      //   }
      // } else {
        if (this.job[this.dateToLog] !== "+ set date" && !this.dateUpdated) {
          this.date = this.job[this.dateToLog];
        } else if (
          this.job[this.dateToLog] === "+ set date" &&
          !this.dateUpdated
        ) {
          this.date = "";
        }
      // }
      
      this.dateUpdated = true;
      return this.date;
    }
  }
};
</script>

<style>
</style>
