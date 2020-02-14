const People = require('../models/people');


exports.index = async function(req, res){
    let peoples = await People.findAll();
    console.log(peoples);
    res.render('public/index/index',{ title: 'Home', peoples:peoples });
};

exports.create = async function(req, res){
    res.render('public/index/create',{ title: 'Create' });
};

exports.store = async function(req, res){
    console.log(req.body);
    res.redirect('/create')
};

exports.edit = async function(req, res){
    // const id = req.params.id;
    // let people = People.findAll(req.params.id).first();
    // console.log(people);
    res.render('public/index/edit',{ title: 'Edit',people:people });
};

exports.update = async function(req, res){
    res.render('public/index/create',{ title: 'Create' });
};

exports.delete = async function(req, res){
    // People.delete(req.)
    res.redirect('/',{status:'success',message:'Deleted successful!'})
};
