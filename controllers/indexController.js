const People = require('../models/people');

exports.index = function(req, res){
    
    res.render('public/index/index',{ title: 'Home' });
};

exports.create = async function(req, res){
    res.render('public/index/create',{ title: 'Create' });
};