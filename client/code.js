var app = new Vue({
    el: "#app",

    data: {
        dropdown_font: ['My firstBoard'],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        columns: [{
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
                jobs: 4
            },
            {
                column: 4,
                title: "ON SITE",
                jobs: 3
            },
            {
                column: 5,
                title: "OFFER",
                jobs: 2
            },
            {
                column: 6,
                title: "REJECTED",
                jobs: 1
            }
        ],

        more_button_options: [
            { title: "Move list", icon: "open_with" },
            { title: "Rename", icon: "edit" }
        ],

        jobs: [{
                column: 1,
                color: "green",
                title: "Google",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "yellow",
                title: "Twitter",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "blue",
                title: "WeWork",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "pink",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 1,
                color: "red",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 2,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "purple",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 3,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 4,
                color: "pink",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 4,
                color: "blue",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 4,
                color: "green",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 5,
                color: "red",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 5,
                color: "orange",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            },
            {
                column: 6,
                color: "yellow",
                title: "Weave",
                subtitle: "Product Manager",
                date_added: "2 Years",
                image: "images/google-icon.svg"
            }
        ],

        items: [
            { icon: 'images/huntr_logo_mini.png' },
            { icon: 'images/microphone.png' },
            { icon: 'images/thumbtack.png' },
            { icon: 'images/settings.png' },
            { icon: 'images/power-off.png' }
        ],
        items2: [
            { icon: 'list', iconClass: 'indigo white--text', title: 'all' },
            { icon: 'star', iconClass: 'amber white--text', title: 'Today' },
            { icon: 'event', iconClass: 'blue white--text', title: 'Upcoming' },
            { icon: 'check', iconClass: 'green white--text', title: 'Completed' }
        ],
        items3: [{
            action: 'work',
            title: 'Jobs',
            active: true,
            items3: [
                { title: 'product engineer' },
                { title: 'software engineer' },
                { title: 'senior data engineer' },
                { title: 'senior data engineer' },
                { title: 'product manager' },
                { title: 'product manager' },
                { title: 'product manager' },
                { title: 'product manager' },
                { title: 'product manager' },
                { title: 'product manager' },
                { title: 'senior data engineer' },
                { title: 'Software engineer' },
                { title: 'product manager' },
                { title: 'software engineer' }
            ]
        }, ],
    },

    methods: {
        filterJobs: function(index) {
            var sorted_jobs = this.jobs.filter(function(job) {
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