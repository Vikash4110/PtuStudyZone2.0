const Youtube = require('../models/youtube-model');

const getYoutube = async (req, res) => {
    try {
        const response = await Youtube.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: 'No Youtube found' });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Youtube Error: ${error}`);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getYoutube;
