const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var server = express();

var port = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Database models
var jobModel = require("./schemas/job.js");

// REST endpoints
server.get("/playlist", function(req, res) {
  playlistModel
    .find()
    .then(function(playlist) {
      res.json(playlist);
    })
    .catch(function(error) {
      res.status(400).json({ msg: error.message });
    });
});

server.post("/jobs", function(req, res) {});

// Start the server and connect to the database
mongoose
  .connect(
    "mongodb+srv://fela:hwdXbg898CLhwObf@cluster0-nwalm.mongodb.net/app?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(function() {
    server.listen(port, function() {
      console.log(`Listening on port ${port}`);
    });
  });
