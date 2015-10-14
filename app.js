var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// CHANGE: Adding adaro
var dustjs = require('adaro');

// CHANGE2: Adding makara and bcp47
var makara = require('makara');
var bcp47mw = require('express-bcp47');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// CHANGE2: Adding helpers
var helpers = [ 'dust-makara-helpers' ];

// CHANGE: Setting adaro as app.engine CHANGE2: Adding helpers
app.engine('dust', dustjs.dust({ cache: false, helpers: helpers}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// CHANGE: Setting view engine to dust
app.set('view engine', 'dust');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CHANGE2: Using makara and bcp47
app.use(bcp47mw({ defaultLocale: "en-US", vary: true }));
app.use(makara({
  i18n: {
    contentPath: path.resolve(__dirname, 'locales'),
    fallback: 'en-US'
  }
}));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: 'Express and Adaro',
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Express and Adaro',
    message: err.message,
    error: {}
  });
});


module.exports = app;
