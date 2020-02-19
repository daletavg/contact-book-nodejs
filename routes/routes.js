const indexRouter = require('./index');
const telegramRouter = require('./telegram');


module.exports = function(server){
    server.use('/', indexRouter,telegramRouter);
    // server.use('/bot',telegramRouter);
};
