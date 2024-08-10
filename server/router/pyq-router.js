const express = require('express');
const router = express.Router();
const pyqController = require('../controllers/pyq-controller');

router.get('/pyq', pyqController); 

module.exports = router;
