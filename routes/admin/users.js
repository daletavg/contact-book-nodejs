const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/admin/usersController');



router.get('/users',usersController.index);

module.exports = router;
