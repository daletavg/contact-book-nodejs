var indexRouter = require('./home');
var usersRouter = require('./users');


module.exports = function(server){
    server.use('/', indexRouter);
    // server.use('/users', usersRouter);    
}