<template>
  <v-app>
  <v-content>
      <SideNav />
      <TopNav />
      <TopNavTwo />
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import SideNav from './components/SideNav.vue'
import TopNav from './components/TopNav.vue'
import TopNavTwo from './components/TopNavTwo.vue'

export default {
  name: 'App',
  components: {
    SideNav,
    TopNav,
    TopNavTwo
  },
  data () {
    return {
    }
  }
}
</script>


