const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/admin/auth/loginController');
// const usersController = require('../../controllers/admin/usersController');



router.get('/login',loginController.index);
router.post('/login',loginController.login);
// router.get('/users',usersController.index);

module.exports = router;
