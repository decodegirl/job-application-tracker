const mongoose = require("mongoose");

const stagesSchema = mongoose.Schema({
  stage: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true,
    default: new Date().toDateString()
  }
});

var model = mongoose.model("stages", stagesSchema);

module.exports = model;
