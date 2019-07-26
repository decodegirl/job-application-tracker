const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
    company: {
        type: String,
        required: true,
        default: ""
    },
    title: {
        type: String,
        required: false,
        default: "No Job Title"
    },
    position: {
        type: Number,
        required: false,
        default: 0
    },
    userId: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: false,
        default: "+ add location"
    },
    salary: {
        type: String,
        required: false,
        default: "+ add salary"
    },
    post_url: {
        type: String,
        required: false,
        default: "+ add URL"
    },
    deadline: {
        type: String,
        required: false,
        default: "+ set date"
    },
    applied: {
        type: String,
        required: false,
        default: "+ set date"
    },
    interview1: {
        type: String,
        required: false,
        default: "+ set date"
    },
    interview2: {
        type: String,
        required: false,
        default: "+ set date"
    },
    offer: {
        type: String,
        required: false,
        default: "+ set date"
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    notes: {
        type: String,
        required: false,
        default: ""
    },
    color: {
        type: String,
        required: false,
        default: "blue"
    },
    date_added: {
        type: String,
        required: false,
        default: new Date().toDateString()
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    company_info: {
        title: {
            type: String,
            required: false,
            default: ""
        },
        description: {
            type: String,
            required: false,
            default: ""
        },
        website: {
            type: String,
            required: false,
            default: ""
        },
        founded: {
            type: Number,
            required: false,
            default: ""
        },
        type: {
            type: String,
            required: false,
            default: ""
        },
        country: {
            type: String,
            required: false,
            default: ""
        },
        industry: {
            type: String,
            required: false,
            default: ""
        },
        alexa_global: {
            type: String,
            required: false,
            default: ""
        },
        alexa_usa: {
            type: String,
            required: false,
            default: ""
        }
    },
    todos: [{
        content: {
            type: String,
            required: false
        },
        active: {
            type: Boolean,
            required: false,
            default: true
        },
        deadline: {
            type: String,
            required: false,
            default: "+ set date"
        },
        completed: {
          type: Boolean,
          required: false,
          default: false
        }
    }]
});

var model = mongoose.model("jobs", jobsSchema);

module.exports = model;