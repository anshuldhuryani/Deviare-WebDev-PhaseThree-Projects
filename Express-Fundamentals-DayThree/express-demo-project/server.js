var express = require('express');
var app = express();
var genres = require('./routes/genre.routes');
var courses = require('./routes/course.routes');
var users = require('./routes/user.routes');
var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/simplilearndb",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('You are connected to DB!!'); })
    .catch((error) => { console.log(error); })

// Adding Middlewares
app.use(express.json());
// Routes Middlewares
app.use('/courses', courses);
app.use('/genres', genres);
app.use('/users', users);

// GET Request: http://localhost:3000/
app.get('/', function (req, res) {
    res.send("Express Demo Project!!");
})


app.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})