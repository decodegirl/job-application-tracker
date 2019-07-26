const mongoose = require("mongoose");

const stagesSchema = mongoose.Schema({
    // userId: {
    //     type: String,
    //     required: true,
    // },
    title: {
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