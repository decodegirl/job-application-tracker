<template>
  <v-app v-cloak>
    <v-content>
      <SideNav />
      <TopNav />
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav.vue'
import TopNav from './components/TopNav.vue'

export default {
  name: 'App',
  components: {
    SideNav,
    TopNav,
  },
  data () {
    return {
    }
  }
}
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
</style>



