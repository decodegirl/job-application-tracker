var app = new Vue({
  el: "#app",

  data: {
    columns: [
      {
        title: "WISHLIST",
        jobs: 6
      },
      {
        title: "APPLIED",
        jobs: 5
      },
      {
        title: "PHONE",
        jobs: 3
      },
      {
        title: "ON SITE",
        jobs: 2
      },
      {
        title: "OFFER",
        jobs: 1
      },
      {
        title: "REJECTED",
        jobs: 0
      }
    ],
    items: [
      { title: "Move list", icon: "open_with" },
      { title: "Rename", icon: "edit" }
    ]
  },

  methods: {},

  computed: {}
});

var app = new Vue({
  el: "#app2"
});
