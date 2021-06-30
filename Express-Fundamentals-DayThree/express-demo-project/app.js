var express = require('express');
var app = express();

// GET Request: http://localhost:3000/
app.get('/', function (req, res) {
    res.send("Express Demo Project!!");
})

// GET Request: http://localhost:3000/courses
app.get('/courses', (req, res) => {
    res.send('List of Courses..')
})

app.listen(3000, function () {
    console.log('The server is running at port 3000!!');
})