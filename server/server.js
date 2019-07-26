const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const login = require('./login');

var server = express();

var port = process.env.PORT || 3000;

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// first make sure the user is logged in
server.use(login);

//serve static files
server.use(express.static('dist'));

const jobsModel = require("./schemas/job.js");
const stagesModel = require("./schemas/stages.js");

/** ------------ Stages Endpoints --------------- */

server.get("/stages", function (req, res) {
    stagesModel
        .find()
        .then(function (stages) {
            res.status(200);
            res.json({ stages: stages });
        })
        .catch(function (error) {
            res.status(400).json({ msg: error.message });
        });
});

server.post("/stages", function (req, res) {
    stagesModel
        .create({
            stage: req.body.stage,
            position: req.body.position
        })
        .then(function (stage) {
            res.status(201);
            // log the stage for development purposes
            res.json(stage);
        })
        .catch(function (err) {
            res.status(400);
            res.json({ msg: err.message });
        });
});

server.delete("/stages/:id", function (req, res) {
    stagesModel.findByIdAndDelete(req.params.id).then(function () {
        res.status(204);
        res.send();
    }).catch(function (error) {
        var response = {
            msg: error.message
        };
        res.status(400);
        res.json(response);
    });
});

server.put("/stages/:id", function (req, res) {
    const options = {
        new: true
    }
    req.body.date = new Date().toDateString();

    stagesModel.findByIdAndUpdate(req.params.id, req.body, options).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (error) {
        var response = {
            msg: error.message
        };
        res.status(400);
        res.json(response);
    });
})

/** ------------ Jobs Endpoints --------------- */

server.get("/jobs", function (req, res) {
    jobsModel
        .find({ userId: req.user['_id'] })
        .then(function (jobs) {
            res.status(200);
            res.json({ jobs: jobs });
        })
        .catch(function (error) {
            res.status(400).json({ msg: error.message });
        });
});

// Post Jobs
server.post("/jobs", function (req, res) {
    var newJob = req.body;
    newJob['userId'] = req.user['_id']
    jobsModel
        .create(newJob)
        .then(function (job) {
            res.status(201);
            // log the job for development purposes
            res.json(job);
        })
        .catch(function (err) {
            res.status(400);
            res.json({ msg: err.message });
        });
});

// Delete jobs
server.delete("/jobs/:id", function (req, res) {
    jobsModel.findByIdAndDelete(req.params.id).then(function () {
        res.status(204);
        res.send();
    }).catch(function (error) {
        var response = {
            msg: error.message
        };
        res.status(400);
        res.json(response);
    });
});

// update jobs
server.put("/jobs/:id", function (req, res) {
    const options = {
        new: true
    }
    jobsModel.findByIdAndUpdate(req.params.id, req.body, options).then(function (doc) {
        res.status(200);
        res.send(doc);
    }).catch(function (error) {
        var response = {
            msg: error.message
        };
        res.status(400);
        res.json(response);
    });
});

// Start the server and connect to the database
mongoose
    .connect(
        "mongodb+srv://fela:hwdXbg898CLhwObf@cluster0-nwalm.mongodb.net/app?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useFindAndModify: false
        }
    )
    .then(function () {
        server.listen(port, function () {
            console.log(`Listening on port ${port}`);
        });
    });