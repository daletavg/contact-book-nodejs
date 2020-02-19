const indexRouter = require('./index');
// const telegramRouter = require('./telegram');


module.exports = function(server){
    server.use('/', indexRouter);
    // server.use('/bot',telegramRouter);
};
