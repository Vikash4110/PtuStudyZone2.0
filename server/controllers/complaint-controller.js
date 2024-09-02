const Complaint = require("../models/complaint-model");

const complaintForm = async (req, res) => {
    try {
        const { username, department, email, problem, date } = req.body;
        await Complaint.create({ username, department, email, problem, date });
        return res.status(200).json({ msg: "Complaint submitted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Failed to submit complaint" });
    }
};

module.exports = { complaintForm };
