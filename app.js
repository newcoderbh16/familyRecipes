var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./controllers/index');
var usersRouter = require('./controllers/users');
const momRecipes = require('./controllers/momRecipes');

var app = express();

if (process.env.NODE_ENV !== 'production'){

  require('dotenv').config()

}
const mongoose = require('mongoose');
const { access } = require('fs');
mongoose.connect(process.env.DATABASE_URL)
.then(
  (res) => {

    console.log('Connected to MongoDB')

  }
).catch(() => {

  console.log('Cannot connect to MongoDB')

})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/momRecipes', momRecipes);

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

module.exports = app;
