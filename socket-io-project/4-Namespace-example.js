
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

var namespace = io.of('/my-namespace');
namespace.on('connection', (socket) => {
    console.log('A client is connected.');
    namespace.emit('Greeting', 'Hello Everyone!!');
})

http.listen(3000, () => {
    console.log('Server is listening at port 3000!!');
})