module.exports = function (server) {
    server.use(function (req, res, next) {
       if(req.session.flash!== undefined) {
           req.session.flash.msg.map(function (data) {
               res.locals.flash = data;
           });
           delete req.session.flash;
       }
       next();
    });
};
