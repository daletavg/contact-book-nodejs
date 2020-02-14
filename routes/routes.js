const indexRouter = require('./index');
const usersRouter = require('./users');


module.exports = function(server){
    server.use('/', indexRouter);
};
