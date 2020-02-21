const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/admin/usersController');



router.get('/users',usersController.index);


router.get('/users/edit/:id',usersController.edit);
router.post('/users/update/:id',usersController.update);
router.post('/users/delete/:id',usersController.delete);

module.exports = router;
