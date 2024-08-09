const express = require('express');
const router = express.Router();
const syllabusController = require('../controllers/syllabus-controller');

router.get('/syllabus', syllabusController); 

module.exports = router;
