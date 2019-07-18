<template>
  <v-app>
    <v-content>
      <TopNav />
      <TopNavTwo />
      <SideNav />
      <!-- <v-container fluid> -->
      <router-view />
      <!-- </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import TopNav from "./components/TopNav.vue";
import TopNavTwo from "./components/TopNavTwo.vue";

export default {
  name: "App",
  components: {
    SideNav,
    TopNav,
    TopNavTwo
  },
  data() {
    return {};
  }
};
</script>
