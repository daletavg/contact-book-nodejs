const adminLoginRouter = require('./login');
const adminUsersRouter = require('./users');


module.exports = function(server){
    server.use('/admin',adminLoginRouter,adminUsersRouter);
};
