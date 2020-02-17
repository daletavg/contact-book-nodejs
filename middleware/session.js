module.exports = function (server) {
    server.use(function (req, res, next) {
       if(req.session.flash!== undefined) {
           res.locals.data =req.session.flash.msgs;
           delete req.session.flash;
       }
       next();
    });
};
