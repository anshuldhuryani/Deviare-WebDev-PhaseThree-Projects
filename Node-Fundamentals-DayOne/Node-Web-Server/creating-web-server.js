
// 1. Import Http Module
var http = require('http');

// 2. Create Web Server
var server = http.createServer(function (req, res) {
    // Handling Incoming Request Here..
    res.write('Hello World');
    res.end();
})

// 3. Listening Incoming Requests to Specific Port
server.listen(3000);
console.log('The server is running at 3000!!');