// routes/material-route.js
const express = require('express');
const router = express.Router();
const { addMaterial, getMaterials, getMaterialById, deleteMaterial } = require('../controllers/material-controller');

// Route to add a new material
router.post('/material/add', addMaterial);

// Route to get all materials
router.get('/material/all', getMaterials);

// Route to get a material by ID
router.get('/material/:id', getMaterialById);

// Route to delete a material by ID
router.delete('/material/:id', deleteMaterial); // New route for deleting

module.exports = router;
