const Complaint = require('../models/complaint-model');

const getAllProblems = async (req, res, next) => {
    try {
        const complaints = await Complaint.find();
        if (!complaints || complaints.length === 0) {
            return res.status(404).json({ message: "No complaints found" });
        }
        res.status(200).json({ complaints });
    } catch (error) {
        next(error);
    }
};

const deleteProblemsById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await Complaint.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Complaint not found" });
        }
        return res.status(200).json({ message: "Complaint deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllProblems, deleteProblemsById };
