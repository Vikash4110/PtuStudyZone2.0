const Pyq = require('../models/pyq-model');

const getPyq = async (req, res) => {
    try {
        const response = await Pyq.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: 'No Pyq found' });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Pyq Error: ${error}`);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getPyq;
