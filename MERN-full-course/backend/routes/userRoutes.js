const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// When routed into userRoutes from server.js, we handle the CRUD routing with
// our controller here.
router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router