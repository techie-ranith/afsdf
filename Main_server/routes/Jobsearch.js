const express = require('express');
const router = express.Router();
const JobController = require('../controllers/JobControllers');


router.get('/', (req, res) => JobController.primaryJobSearch(req, res));




module.exports = router;
