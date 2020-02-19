const indexRouter = require('./index');
const usersRouter = require('./telegram');


module.exports = function(server){
    server.use('/', indexRouter);
};
