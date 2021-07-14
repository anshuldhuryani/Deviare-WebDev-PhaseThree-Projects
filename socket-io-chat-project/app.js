var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

users = [];
io.on('connection', function (socket) {
    console.log('A user is connected');
    socket.on('setUsername', function (data) {
        console.log(data);
        users.push(data);
        socket.emit('userSet', { username: data });
    });

    socket.on('msg', function (data) {
        // Send Message to Everyone
        io.sockets.emit('newmsg', data);
    });

})



http.listen(3000, function () {
    console.log('listening on localhost:3000');
});