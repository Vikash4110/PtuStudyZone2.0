const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const hodMiddleware = require("../middlewares/hod-middleware");
const hodController = require("../controllers/hod-controller");

router.get("/complaint", authMiddleware, hodMiddleware, hodController.getAllProblems);
router.delete("/complaint/delete/:id", authMiddleware, hodMiddleware, hodController.deleteProblemsById);

module.exports = router;
