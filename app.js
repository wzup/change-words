'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('express');
const util = require('util');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var adaro = require('adaro');

var routes = require('./routes/routes');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.engine('dust', adaro.dust({}));
app.set('view engine', 'dust');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', routes);



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
        console.log(__filename, '[ERROR env=dev] err:', util.inspect(err, {
            depth: null,
            colors: true
        }), '\n');
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            errorAsIs: JSON.stringify(err, null, 4)
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(__filename, '[ERROR env=prod] err:', util.inspect(err, {
        depth: null,
        colors: true
    }), '\n');
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
