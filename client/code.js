var app = new Vue({
  el: "#app",

  data: {
    dropdown_font: ['My firstBoard'],
    columns: [
      {
        column: 1,
        title: "WISHLIST",
        jobs: 6
      },
      {
        column: 2,
        title: "APPLIED",
        jobs: 5
      },
      {
        column: 3,
        title: "PHONE",
        jobs: 3
      },
      {
        column: 4,
        title: "ON SITE",
        jobs: 2
      },
      {
        column: 5,
        title: "OFFER",
        jobs: 1
      },
      {
        column: 6,
        title: "REJECTED",
        jobs: 0
      }
    ],

    more_button_options: [
      { title: "Move list", icon: "open_with" },
      { title: "Rename", icon: "edit" }
    ],

    jobs: [
      {
        column: 1,
        color: "green",
        title: "Google",
        subtitle: "Product Manager",
        date_added: "2 Years"
      },
      {
        column: 1,
        color: "green",
        title: "Twitter",
        subtitle: "Product Manager",
        date_added: "2 Years"
      },
      {
        column: 1,
        color: "green",
        title: "WeWork",
        subtitle: "Product Manager",
        date_added: "2 Years"
      },
      {
        column: 4,
        color: "green",
        title: "Weave",
        subtitle: "Product Manager",
        date_added: "2 Years"
      }
    ]

  },

  methods: {
    filterJobs: function( index ){
      var sorted_jobs = this.jobs.filter( function(job) {
        return job.column == index;
      });
      return sorted_jobs;
    },

    // sorted_posts: function ( ) {
    //   if( this.selected_category == "All"){
    //       return this.posts;
    //   } else {
    //       var sorted_posts = this.posts.filter( function(post) {
    //           return post.category == app.selected_category;
    //       });
    //       return sorted_posts;
    //   }
    // },
  },

  computed: {}
});
