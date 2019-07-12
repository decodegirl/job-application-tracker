var app = new Vue({
    el: "#app",

    data: {
        map: null,
        tileLayer: null,
        dropdown_font: ['My firstBoard'],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        layers: [{
            id: 0,
            name: 'Restaurants',
            active: false,
            features: [{
                    id: 0,
                    name: 'Googleplex',
                    type: 'marker',
                    coords: [37.4220, -122.0841],
                },
                {
                    id: 1,
                    name: 'US Tech Securities',
                    type: 'marker',
                    coords: [33.785130, -84.480570],
                },
                {
                    id: 2,
                    name: 'Busy Busy',
                    type: 'marker',
                    coords: [37.277860, -83.291520],
                },
                {
                    id: 3,
                    name: 'Century Link',
                    type: 'marker',
                    coords: [32.462340, -93.672000],
                },
                {
                    id: 4,
                    name: 'Twitter',
                    type: 'marker',
                    coords: [35.290140, -80.755580],
                },
                {
                    id: 5,
                    name: 'Facebook',
                    type: 'marker',
                    coords: [37.481930, -122.159910],
                },
                {
                    id: 6,
                    name: 'Microsoft',
                    type: 'marker',
                    coords: [38.6143846, -90.280048],
                },
            ],

        }, ],

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

    mounted: function() {
        this.initMap();
        this.initLayers();
        this.layerChanged(0, true)
    },

    methods: {
        filterJobs: function(index) {
            var sorted_jobs = this.jobs.filter(function(job) {
                return job.column == index;
            });
            return sorted_jobs;
        },

        initMap: function() {
            this.map = L.map('map').setView([40, -100], 4);
            this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
                    maxZoom: 20,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            );
            this.tileLayer.addTo(this.map);
        },
        initLayers: function() {
            this.layers.forEach((layer) => {
                // Initialize the layer
                const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
                markerFeatures.forEach((feature) => {
                    feature.leafletObject = L.marker(feature.coords)
                        .bindPopup(feature.name);
                });
            });
        },
        layerChanged: function(layerId, active) {
            const layer = this.layers.find(layer => layer.id === layerId);
            layer.features.forEach((feature) => {
                /* Show or hide the feature depending on the active argument */
                if (active) {
                    feature.leafletObject.addTo(this.map);
                } else {
                    feature.leafletObject.removeFrom(this.map);
                }
            });
        },
    },

    computed: {

    }
});