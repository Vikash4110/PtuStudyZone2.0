const Notes = require('../models/notes-model');

const getNotes = async (req, res) => {
    try {
        const response = await Notes.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: 'No Notes found' });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Notes Error: ${error}`);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getNotes;
