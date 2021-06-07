const express = require('express');
const userController = require('./../controllers/userControllers');
const router = express.Router();

//Routes
router.route('/').get(userController.getAllUsers).post(userController.addUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
