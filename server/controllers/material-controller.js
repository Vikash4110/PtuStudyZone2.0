// controllers/material-controller.js
const Material = require('../models/material-model');

// Add a new material
const addMaterial = async (req, res) => {
    try {
        const { yourName, service, department, semester, subjectCode, subject, link, note } = req.body;

        // Create a new material instance
        const newMaterial = new Material({
            yourName,
            service,
            department,
            semester,
            subjectCode,
            subject,
            link,
            note
        });

        // Save the material
        await newMaterial.save();
        res.status(201).json({ message: 'Material added successfully', material: newMaterial });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add material' });
    }
};

// Get all materials
const getMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch materials' });
    }
};

// Get a single material by ID
const getMaterialById = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json(material);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch material' });
    }
};

// Delete a material by ID
const deleteMaterial = async (req, res) => {
    try {
        const material = await Material.findByIdAndDelete(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json({ message: 'Material deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete material' });
    }
};

// Exporting functions
module.exports = {
    addMaterial,
    getMaterials,
    getMaterialById,
    deleteMaterial
};
