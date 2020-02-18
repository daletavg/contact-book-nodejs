const {check, validationResult} = require('express-validator');


const validationRules = () => {
    return [
        check('name').notEmpty().isLength({min: 3}).isString(),
        check('surname').notEmpty().isLength({min: 3}).isString(),
        check('number').notEmpty().isNumeric(),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    console.log(!errors.isEmpty());
    if (!errors.isEmpty()) {
        let flashData = [];
        errors.errors.map((err) => {
            flashData.push({
                status: 'danger',
                message: err.msg + ' on ' + err.param + ' "' + err.value + '"'
            });
        });
        req.flash('msgs', flashData);
        return res.redirect('/');
    }
    next();
};

module.exports = {
    validationRules,
    validate
};
