const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// const urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/',indexController.index);
router.get('/create',indexController.create);
router.post('/store',indexController.store);

router.get('/edit/:id',indexController.edit);
router.post('/update/:id',indexController.update);

router.post('/delete/:id',indexController.delete);

module.exports = router;
