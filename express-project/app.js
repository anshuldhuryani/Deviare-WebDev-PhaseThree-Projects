var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect("mongodb://localhost:27017/bhawnagunwanidb",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('You are connected to DB!!'); })
    .catch((error) => { console.log(error); })


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter = require('./routes/employees');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeeRouter);

module.exports = app;
