const People = require('../models/people');


exports.index = async function (req, res) {
    let peoples = await People.findAll();
    res.render('public/index/index', {title: 'Home', peoples: peoples});
};

exports.create = async function (req, res) {
    res.render('public/index/create', {title: 'Create'});
};

exports.store = async function (req, res) {
    const data = req.body;
    await People.create(data);
    req.flash('msg', {status: 'success', message: 'Row is created'});
    res.redirect('/');
};

exports.edit = async function (req, res) {
    const id = req.params.id;
     People.findOne({where: {id}}).then((people)=>{
         res.render('public/index/edit', {title: 'Edit', people: people});
     });

};

exports.update = async function (req, res) {
    const data = req.body;
    const id = req.params.id;
    console.log(data);
    People.update({name:data.name,surname:data.surname,number:data.number,description:data.description}, {where: {id}}).then(()=>{
        req.flash('msg', {status: 'success', message: 'Row is updated'});
        res.redirect('/');
    });

};

exports.delete = async function (req, res) {
    // People.delete(req.)
    res.redirect('/', {status: 'success', message: 'Deleted successful!'})
};
