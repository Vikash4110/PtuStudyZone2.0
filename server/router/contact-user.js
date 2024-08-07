// router/contact-user.js
const express = require('express');
const router = express.Router();
const { contactForm } = require('../controllers/contact-controller'); // Correct path to your controller

router.post('/contact', contactForm);

module.exports = router;
