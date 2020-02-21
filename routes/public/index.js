const express = require('express');
const router = express.Router();
const indexController = require('../../controllers/indexController');
const {validationRules, validate } = require('../../validations/peoplesValidation');


router.get('/',indexController.index);
router.get('/create',indexController.create);
router.post('/store',validationRules(),validate,indexController.store);

router.get('/edit/:id',indexController.edit);
router.post('/update/:id',validationRules(),validate,indexController.update);

router.post('/delete/:id',indexController.delete);

module.exports = router;
