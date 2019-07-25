import Vue from "vue";
import Router from "vue-router";
import Homepage from "./views/Homepage.vue";
import Home from "./views/Home.vue";
import Map from "./views/Map.vue";
import About from "./views/About.vue";
import Briefcase from "./views/Briefcase.vue";
import Tasks from "./views/Tasks.vue";
import Metrics from "./views/Metrics.vue";
import Contact from "./views/Contact.vue";
import BoardCollection from "./views/BoardCollection.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Homepage
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/map",
      name: "map",
      component: Map
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks
    },
    {
      path: "/metrics",
      name: "metrics",
      component: Metrics
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/briefcase",
      name: "briefcase",
      component: Briefcase
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/boards",
      name: "boards",
      component: BoardCollection
    }
  ]
});
