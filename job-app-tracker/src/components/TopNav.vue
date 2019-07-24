<template>
  <v-toolbar
    flat
    style="background-color: #ffffff; border-bottom: 1px solid #ccc;" 
    height="40px"
    xs9
  >
    <v-flex xs6>
      <v-btn flat to="/">Boards</v-btn>
      <v-btn flat to="/contact">Contacts</v-btn>
      <v-btn flat to="/briefcase"> Briefcases</v-btn>
    </v-flex>

    <v-flex>
      <v-layout justify-end>
        <!-- <v-btn flat outline round color="red"> Sign up for free</v-btn>-->
        <a href="/users/logout"><v-btn flat outline round color="red"> Logout </v-btn></a>
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
