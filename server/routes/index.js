const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', ensureAuthenticated, (req, res, next) => next());



module.exports = router;