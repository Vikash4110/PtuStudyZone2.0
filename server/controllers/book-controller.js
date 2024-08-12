const Book = require('../models/book-model');

const getBook = async (req, res) => {
    try {
        const response = await Book.find();
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: 'No Book found' });
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`Book Error: ${error}`);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getBook;
