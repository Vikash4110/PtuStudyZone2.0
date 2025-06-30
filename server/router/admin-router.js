const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

// User Panel
router.route('/user').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/user/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/user/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router.route('/user/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
// Contact Panel
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactById);
// Syllabus Panel
router.route('/syllabus').get(authMiddleware, adminMiddleware, adminController.getAllSyllabus);
router.route('/syllabus/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteSyllabusById);
router.route('/syllabus/add').post(authMiddleware, adminMiddleware, adminController.addSyllabus);
router.route('/syllabus/:id').get(authMiddleware, adminMiddleware, adminController.getSyllabusById);
router.route('/syllabus/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateSyllabusById);
// Pyq Panel
router.route('/pyq').get(authMiddleware, adminMiddleware, adminController.getAllPyq);
router.route('/pyq/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deletePyqById);
router.route('/pyq/add').post(authMiddleware, adminMiddleware, adminController.addPyq);
router.route('/pyq/:id').get(authMiddleware, adminMiddleware, adminController.getPyqById);
router.route('/pyq/update/:id').patch(authMiddleware, adminMiddleware, adminController.updatePyqById);
// Notes Panel
router.route('/notes').get(authMiddleware, adminMiddleware, adminController.getAllNotes);
router.route('/notes/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteNotesById);
router.route('/notes/add').post(authMiddleware, adminMiddleware, adminController.addNotes);
router.route('/notes/:id').get(authMiddleware, adminMiddleware, adminController.getNotesById);
router.route('/notes/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateNotesById);
// Blogs Panel
router.route('/blogs')
  .get(authMiddleware, adminMiddleware, adminController.getAllBlogs);
router.route('/blogs/delete/:id')
  .delete(authMiddleware, adminMiddleware, adminController.deleteBlogById);

// Youtube Panel
router.route('/youtube').get(authMiddleware, adminMiddleware, adminController.getAllYoutube);
router.route('/youtube/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteYoutubeById);
router.route('/youtube/add').post(authMiddleware, adminMiddleware, adminController.addYoutube);
router.route('/youtube/:id').get(authMiddleware, adminMiddleware, adminController.getYoutubeById);
router.route('/youtube/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateYoutubeById);

// Book Panel
router.route('/book').get(authMiddleware, adminMiddleware, adminController.getAllBook);
router.route('/book/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteBookById);
router.route('/book/add').post(authMiddleware, adminMiddleware, adminController.addBook);
router.route('/book/:id').get(authMiddleware, adminMiddleware, adminController.getBookById);
router.route('/book/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateBookById);
module.exports = router;

