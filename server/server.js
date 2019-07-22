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
const stagesModel = require("./schemas/stages.js");

// REST endpoints
server.get("/stages", function(req, res) {
  stagesModel
    .find()
    .then(function(stages) {
      res.status(200);
      res.json({ stages: stages });
    })
    .catch(function(error) {
      res.status(400).json({ msg: error.message });
    });
});

// Get jobs
server.get("/jobs", function(req, res) {
  jobsModel
    .find()
    .then(function(jobs) {
      res.status(200);
      res.json({ jobs: jobs });
    })
    .catch(function(error) {
      res.status(400).json({ msg: error.message });
    });
});

// Delete jobs
server.delete("/jobs/:id", function( req, res ) {
  jobsModel.findByIdAndDelete( req.params.id ).then( function( ){
      res.status( 204 );
      res.send( );
  }).catch( function ( error ) {
      var response = {
          msg: error.message
      };
      res.status( 400 );
      res.json( response );
  });
});

// Delete stages
server.delete("/stages/:id", function( req, res ) {
  stagesModel.findByIdAndDelete( req.params.id ).then( function( ){
      res.status( 204 );
      res.send( );
  }).catch( function ( error ) {
      var response = {
          msg: error.message
      };
      res.status( 400 );
      res.json( response );
  });
});

// Post Jobs
server.post("/jobs", function(req, res) {
  jobsModel
    .create({
      id: req.body.id,
      column: req.body.column,
      color: req.body.color,
      title: req.body.title,
      sub_title: req.body.sub_title,
      date_added: req.body.date_added,
      image: req.body.image,
      location: req.body.location,
      salary: req.body.salary,
      post_url: req.body.post_url,
      dealine: req.body.deadline,
      applied: req.body.applied,
      interview1: req.body.interview1,
      interview2: req.body.interview2,
      offer: req.body.offer,
      description: req.body.description,
      notes: req.body.notes,
      company_info: {
        title: req.body.company_info.title,
        description: req.body.company_info.description,
        website: req.body.company_info.website,
        founded: req.body.company_info.founded,
        type: req.body.company_info.type,
        country: req.body.company_info.country,
        industry: req.body.company_info.industry,
        alexa_global: req.body.company_info.alexa_global,
        alexa_usa: req.body.company_info.alexa_usa
      },
      todos: []
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

// Post stages
server.post("/stage", function(req, res) {
  stagesModel
    .create({
      stage: req.body.stage
    })
    .then(function(stage) {
      res.status(201);
      // log the stage for development purposes
      res.json(stage);
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
