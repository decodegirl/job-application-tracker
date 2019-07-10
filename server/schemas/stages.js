const mongoose = require("mongoose");

const stagesSchema = mongoose.Schema({
  stage: {
    type: String,
    required: true
  },
  // the date it was added
  date: {
    type: String,
    required: true,
    default: new Date().toDateString()
  }
});

var model = mongoose.model("stages", stagesSchema);

module.exports = model;
