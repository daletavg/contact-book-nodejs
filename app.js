const  createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const  logger = require('morgan');
const  router = require('./routes/routes');

const  flashMessagesMiddleware = require('./middleware/session');

const  twig  = require('twig');
const  session = require('express-session'),
    cookieParser = require("cookie-parser"),
    flash = require("connect-flash");
const bodyParser = require('body-parser');
const  app = express();

twig.cache(false);
app.use(cookieParser("happy dog"));
app.use(session({
  secret:'happy dog',
  saveUninitialized: true,
  resave: true
}));

app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

flashMessagesMiddleware(app);
router(app);




const sequelize = require('./config/database');


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelize.sync({force:false}).then(result=>{
  // console.log(result);
})
.catch(err=> console.log(err));


module.exports = app;

