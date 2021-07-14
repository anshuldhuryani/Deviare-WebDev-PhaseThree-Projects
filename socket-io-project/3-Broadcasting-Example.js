
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

var clients = 0;
io.on('connection', (socket) => {
    clients++;
    io.sockets.emit('broadcast', { desc: clients + " clients connected!!" });
    socket.on('disconnect', () => {
        clients--;
        io.sockets.emit('brodcast', { desc: clients + " clients connected!!" });
    })
})

http.listen(3000, () => {
    console.log('Server is listening at port 3000!!');
})