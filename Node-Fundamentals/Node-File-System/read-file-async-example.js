var fs = require('fs');

// Reading File Asynchronously..
fs.readFile('./files/demo-one.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// Reading File Asynchronously..
fs.readFile('./files/demo-two.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

