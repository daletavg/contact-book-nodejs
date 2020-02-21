const {User} = require('../../models/users');


exports.index = async (req, res, next)=>{
    const users =  await User.findAll();
    console.log(users);
    res.render('admin/users/index', {title: 'Users', users});
};

exports.edit = (req, res, next)=>{
    res.render('admin/users/index', {title: 'Users'});
};

exports.update = (req, res, next)=>{
    res.render('admin/users/index', {title: 'Users'});
};

exports.delete = (req, res, next)=>{
    const id = req.params.id;
    User.destroy({where: {id: id}}).then(() => {
        req.flash('msgs', {status: 'success', message: 'Deleted successful!'});
        res.redirect('/admin/users');
    });
};
