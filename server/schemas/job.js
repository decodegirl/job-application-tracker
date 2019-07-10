const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false
  },
  salary: {
    type: String,
    required: false
  },
  postURL: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: true,
    default: new Date().toDateString()
  }
});

var model = mongoose.model("jobs", jobsSchema);

module.exports = model;
