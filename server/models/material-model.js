// models/material-model.js
const { Schema, model } = require('mongoose');

// Define the schema for materials
const materialSchema = new Schema({
    yourName: { type: String, required: true },
    service: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: String, required: true },
    subjectCode: { type: String }, 
    subject: { type: String, required: true },
    link: { type: String, required: true },
    note: { type: String },
    dateCreated: { type: Date, default: Date.now } 
}, { timestamps: true }); 

// Create the Material model
const Material = model('Material', materialSchema);

module.exports = Material;
