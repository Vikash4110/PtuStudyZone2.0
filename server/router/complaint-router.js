const express = require('express');
const router = express.Router();
const { complaintForm } = require("../controllers/complaint-controller");

router.post("/complaint", complaintForm);

module.exports = router;
