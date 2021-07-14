// var express = require('express');
// var app = express();

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// Whenever A user connects this piece of code gets executed.
io.on('connection', (socket) => {
    console.log('A user is connected.');

    // Whenever A user disconnects this piece of code gets executed.
    socket.on('disconnect', () => {
        console.log('A user is disconnected.');
    })
})

http.listen(3000, () => {
    console.log('Server is listening at port 3000!!');
})