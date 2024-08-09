const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const Syllabus = require('../models/syllabus-model');

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

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData });
    if (!updatedData.nModified) return res.status(404).json({ message: 'User not found or data unchanged' });
    res.status(200).json({ message: 'User updated successfully' });
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
};
