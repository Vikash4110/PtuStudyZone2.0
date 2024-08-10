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

module.exports = router;
