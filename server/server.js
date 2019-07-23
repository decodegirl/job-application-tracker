const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const login = require("./login");

var server = express();

var port = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({
    extended: false
}));

// first make sure user is logged in
server.use(login);

// serve static files
server.use(express.static("dist"));

// server.use("/", (req, res, next) => {
//     console.log(req.url);
//     next();
// })

const jobsModel = require("./schemas/job.js");
const stagesModel = require("./schemas/stages.js");

// REST endpoints
server.get("/stages", function(req, res) {
    stagesModel
        .find()
        .then(function(stages) {
            res.status(200);
            res.json({
                stages: stages
            });
        })
        .catch(function(error) {
            res.status(400).json({
                msg: error.message
            });
        });
});

server.get("/jobs", function(req, res) {
    jobsModel
        .find()
        .then(function(jobs) {
            res.status(200);
            res.json({
                jobs: jobs
            });
        })
        .catch(function(error) {
            res.status(400).json({
                msg: error.message
            });
        });
});

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
            res.json({
                msg: err.message
            });
        });
});

server.post("/jobs", function(req, res) {
    jobsModel
        .create({
            company: req.body.company,
            title: req.body.title,
            columnId: req.body.columnId
        })
        .then(function(job) {
            res.status(201);
            // log the job for development purposes
            res.json(job);
        })
        .catch(function(err) {
            res.status(400);
            res.json({
                msg: err.message
            });
        });
});

// Start the server and connect to the database
mongoose
    .connect(
        "mongodb+srv://fela:hwdXbg898CLhwObf@cluster0-nwalm.mongodb.net/app?retryWrites=true&w=majority", {
            useNewUrlParser: true
        }
    )
    .then(function() {
        server.listen(port, function() {
            console.log(`Listening on port ${port}`);
        });
    });