const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema( {
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    seconds: {
        type: Number,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    }
});

var model = mongoose.model( "playlists", playlistSchema);

module.exports = model;