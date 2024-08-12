const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const Syllabus = require('../models/syllabus-model');
const Pyq = require('../models/pyq-model');
const Notes = require('../models/notes-model');
const Blog = require('../models/blog-model');
const Youtube = require("../models/youtube-model");
const Book = require("../models/book-model");

// User Controllers
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users.length) return res.status(404).json({ message: 'No users found' });
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }, { password: 0 });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// const updateUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updatedUserData = req.body;
//     const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData });
//     if (!updatedData.nModified) return res.status(404).json({ message: 'User not found or data unchanged' });
//     res.status(200).json({ message: 'User updated successfully' });
//   } catch (error) {
//     next(error);
//   }
// };

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { $set: updatedUserData }, { new: true });

    if (!updatedUser) return res.status(404).json({ message: 'User not found or data unchanged' });
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Contact Controllers
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts.length) return res.status(404).json({ message: 'No contacts found' });
    res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Syllabus Controllers
const getAllSyllabus = async (req, res, next) => {
  try {
    const syllabus = await Syllabus.find();
    if (!syllabus.length) return res.status(404).json({ message: 'No syllabus found' });
    res.status(200).json(syllabus);
  } catch (error) {
    next(error);
  }
};

const getSyllabusById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const syllabus = await Syllabus.findOne({ _id: id });
    if (!syllabus) return res.status(404).json({ message: 'Syllabus not found' });
    res.status(200).json(syllabus);
  } catch (error) {
    next(error);
  }
};

const addSyllabus = async (req, res, next) => {
  try {
    const { service, semester, subject, subjectcode, link } = req.body;
    const newSyllabus = new Syllabus({ service, semester, subject, subjectcode, link });
    await newSyllabus.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (error) {
    next(error);
  }
};

const updateSyllabusById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedSyllabusData = req.body;

    // Find the syllabus first
    const syllabus = await Syllabus.findOne({ _id: id });
    if (!syllabus) {
      return res.status(404).json({ message: 'Syllabus not found' });
    }

    // Update the syllabus
    await Syllabus.updateOne({ _id: id }, { $set: updatedSyllabusData });
    res.status(200).json({ message: 'Syllabus updated successfully' });
  } catch (error) {
    next(error);
  }
};
const deleteSyllabusById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Syllabus.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Syllabus not found' });
    res.status(200).json({ message: 'Syllabus deleted successfully' });
  } catch (error) {
    next(error);
  }
};



// Pyq Controllers
const getAllPyq = async (req, res, next) => {
  try {
    const pyq = await Pyq.find();
    if (!pyq.length) return res.status(404).json({ message: 'No pyq found' });
    res.status(200).json(pyq);
  } catch (error) {
    next(error);
  }
};

const getPyqById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pyq = await Pyq.findOne({ _id: id });
    if (!pyq) return res.status(404).json({ message: 'pyq not found' });
    res.status(200).json(pyq);
  } catch (error) {
    next(error);
  }
};

const addPyq = async (req, res, next) => {
  try {
    const { service, semester, subject, subjectcode, linka, linkb, linkc } = req.body;
    const newPyq = new Pyq({ service, semester, subject, subjectcode, linka, linkb, linkc });
    await newPyq.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (error) {
    next(error);
  }
};

const updatePyqById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPyqData = req.body;

    // Find the Pyq first
    const pyq = await Pyq.findOne({ _id: id });
    if (!pyq) {
      return res.status(404).json({ message: 'Pyq not found' });
    }

    // Update the Pyq
    await Pyq.updateOne({ _id: id }, { $set: updatedPyqData });
    res.status(200).json({ message: 'Pyq updated successfully' });
  } catch (error) {
    next(error);
  }
};
const deletePyqById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Pyq.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Pyq not found' });
    res.status(200).json({ message: 'Pyq deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Notes Controllers
const getAllNotes = async (req, res, next) => {
  try {
    const notes = await Notes.find();
    if (!notes.length) return res.status(404).json({ message: 'No Notes found' });
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

const getNotesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const notes = await Notes.findOne({ _id: id });
    if (!notes) return res.status(404).json({ message: 'Notes not found' });
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

const addNotes = async (req, res, next) => {
  try {
    const { service, semester, subject, subjectcode, link } = req.body;
    const newNotes = new Notes({ service, semester, subject, subjectcode, link });
    await newNotes.save();
    res.status(201).json({ message: 'Notes added successfully' });
  } catch (error) {
    next(error);
  }
};

const updateNotesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedNotesData = req.body;

    // Find the Notes first
    const notes = await Notes.findOne({ _id: id });
    if (!notes) {
      return res.status(404).json({ message: 'Notes not found' });
    }

    // Update the Notes
    await Notes.updateOne({ _id: id }, { $set: updatedNotesData });
    res.status(200).json({ message: 'Notes updated successfully' });
  } catch (error) {
    next(error);
  }
};
const deleteNotesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Notes.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Notes not found' });
    res.status(200).json({ message: 'Notes deleted successfully' });
  } catch (error) {
    next(error);
  }
}; 


const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    if (!blogs.length) return res.status(404).json({ message: 'No blogs found' });
    res.status(200).json({ blogs }); // Return blogs as an object
  } catch (error) {
    next(error);
  }
};

// Delete blog by ID
const deleteBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error });
  }
};


// Youtube Controllers
const getAllYoutube = async (req, res, next) => {
  try {
    const youtube = await Youtube.find();
    if (!youtube.length) return res.status(404).json({ message: 'No youtube found' });
    res.status(200).json(youtube);
  } catch (error) {
    next(error);
  }
};

const getYoutubeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const youtube = await Youtube.findOne({ _id: id });
    if (!youtube) return res.status(404).json({ message: 'youtube not found' });
    res.status(200).json(youtube);
  } catch (error) {
    next(error);
  }
};

const addYoutube = async (req, res, next) => {
  try {
    const { service, semester, subject, subjectcode, link } = req.body;
    const newYoutube = new Youtube({ service, semester, subject, subjectcode, link });
    await newYoutube.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (error) {
    next(error);
  }
};

const updateYoutubeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedYoutubeData = req.body;

    // Find the syllabus first
    const youtube = await Youtube.findOne({ _id: id });
    if (!youtube) {
      return res.status(404).json({ message: 'youtube not found' });
    }

    // Update the syllabus
    await Youtube.updateOne({ _id: id }, { $set: updatedYoutubeData });
    res.status(200).json({ message: 'Youtube updated successfully' });
  } catch (error) {
    next(error);
  }
};
const deleteYoutubeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Youtube.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Youtube not found' });
    res.status(200).json({ message: 'Youtube deleted successfully' });
  } catch (error) {
    next(error);
  }
};


// Books Controllers
const getAllBook = async (req, res, next) => {
  try {
    const book = await Book.find();
    if (!book.length) return res.status(404).json({ message: 'No book found' });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });
    if (!book) return res.status(404).json({ message: 'book not found' });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const addBook = async (req, res, next) => {
  try {
    const { service, semester, subject, subjectcode, link } = req.body;
    const newBook = new Book({ service, semester, subject, subjectcode, link });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    next(error);
  }
};

const updateBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBookData = req.body;

    // Find the Book first
    const book = await Book.findOne({ _id: id });
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }

    // Update the Book
    await Book.updateOne({ _id: id }, { $set: updatedBookData });
    res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    next(error);
  }
};
const deleteBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
  getAllSyllabus,
  getSyllabusById,
  addSyllabus,
  updateSyllabusById,
  deleteSyllabusById,
  getAllPyq,
  getPyqById,
  addPyq,
  updatePyqById,
  deletePyqById,
  getAllNotes,
  getNotesById,
  addNotes,
  updateNotesById,
  deleteNotesById,
  getAllBlogs,
  deleteBlogById,
  getAllYoutube,
  getYoutubeById,
  addYoutube,
  updateYoutubeById,
  deleteYoutubeById,
  getAllBook,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
};
