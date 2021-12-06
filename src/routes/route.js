const express = require('express');

const router = express.Router();

const collegeController = require('../controllers/collegeController');
const internsController = require('../controllers/internsController');

router.post('/functionUp/Colleges', collegeController.createCollege);
router.post('/functionUp/interns', internsController.createInterns);
module.exports = router;