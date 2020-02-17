const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const { check } = require('express-validator');
// const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/',indexController.index);
router.get('/create',indexController.create);
router.post('/store',[
    check('name').notEmpty().isLength({min:3}).isString(),
    check('surname').notEmpty().isLength({min:3}).isString(),
    check('number').notEmpty().isNumeric(),
],indexController.store);

router.get('/edit/:id',indexController.edit);
router.post('/update/:id',[
    check('name').notEmpty().isLength({min:3}).isString(),
    check('surname').notEmpty().isLength({min:3}).isString(),
    check('number').notEmpty().isNumeric(),
],indexController.update);

router.post('/delete/:id',indexController.delete);

module.exports = router;
