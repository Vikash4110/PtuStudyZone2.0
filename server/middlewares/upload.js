const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Path to save the uploaded files
    cb(null, path.join(__dirname, './uploads/profile-pics'));
  },
  filename: function (req, file, cb) {
    // Name of the file to be saved
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create multer instance
const upload = multer({ storage: storage });

module.exports = upload;
