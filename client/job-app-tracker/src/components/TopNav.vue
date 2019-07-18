<template>
  <v-toolbar
    flat
    style="background-color: #ffffff; border-bottom: 1px solid #ccc;"
    xs9
  >
    <v-flex xs6>
      <v-btn flat>Boards</v-btn>
      <v-btn flat>Contacts</v-btn>
      <v-btn flat> briefcases</v-btn>
    </v-flex>

    <v-flex>
      <v-layout justify-end>
        <v-btn flat outline round color="red"> Sign up for free</v-btn>
      </v-layout>
    </v-flex>
  </v-toolbar>
  <!-- End Tool Bar -->
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
