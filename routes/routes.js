const adminRouter = require('./admin/routes');
const publicRouter = require('./public/routes');


module.exports = function (server) {
    adminRouter(server);
    publicRouter(server);
};
