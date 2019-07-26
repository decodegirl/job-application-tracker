<template>
  <v-app v-cloak>
    <v-content>
      <SideNav />
      <TopNav />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import TopNav from "./components/TopNav.vue";

export default {
  name: "App",
  components: {
    SideNav,
    TopNav
  },
  data() {
    return {};
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}

#app {
  font-family: "Roboto", sans-serif;
  line-height: 2;
  background-color: #ffffff;
}
html,
body {
  height: 100%;
  letter-spacing: 0.7px;
}
.ghost {
  opacity: 0.3;
}
.job-card {
  padding-bottom: 5px;
}

.horizontal-scroll {
  overflow-x: auto;
}

.v-list__tile {
  padding: 0 2px;
}
input[type="text"]:focus,
input[type="text"]:hover {
  background-color: #eeeeee;
}
</style>



