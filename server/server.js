const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var server = express();

var port = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const jobsModel = require("./schemas/job.js");

// REST endpoints
// server.get("/playlist", function(req, res) {
//   playlistModel
//     .find()
//     .then(function(playlist) {
//       res.json(playlist);
//     })
//     .catch(function(error) {
//       res.status(400).json({ msg: error.message });
//     });
// });

server.post("/jobs", function(req, res) {
  jobsModel
    .create({
      company: req.body.company,
      title: req.body.title,
      location: req.body.location
    })
    .then(function(job) {
      res.status(201);
      // log the job for development purposes
      res.json(job);
    })
    .catch(function(err) {
      res.status(400);
      res.json({ msg: err.message });
    });
});

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
