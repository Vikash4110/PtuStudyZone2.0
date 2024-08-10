const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes-controller');

router.get('/notes', notesController); 

module.exports = router;
