const { Schema, model } = require('mongoose');

const complaintSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Complaint = model('Complaint', complaintSchema);

module.exports = Complaint;
