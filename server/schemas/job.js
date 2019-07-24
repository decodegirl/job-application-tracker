const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
    default: ""
  },
  title: {
    type: String,
    required: true,
    default: ""
  },
  position: {
    type: Number,
    required: false,
    default: 0
  },
  location: {
    type: String,
    required: false,
    default: ""
  },
  salary: {
    type: Number,
    required: false,
    default: 0
  },
  post_url: {
    type: String,
    required: false,
    default: ""
  },
  deadline: {
    type: String,
    required: false,
    default: ""
  },
  applied: {
    type: String,
    required: false,
    default: ""
  },
  interview1: {
    type: String,
    required: false,
    default: ""
  },
  interview2: {
    type: String,
    required: false,
    default: ""
  },
  offer: {
    type: String,
    required: false,
    default: ""
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
  todos: [
    {
      content: {
        type: String,
        required: false
      },
      active: {
        type: Boolean,
        required: false,
        default: true
      }
    }
  ]
});

var model = mongoose.model("jobs", jobsSchema);

module.exports = model;
