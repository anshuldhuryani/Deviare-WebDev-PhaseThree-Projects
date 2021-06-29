var fs = require('fs');

// fs.writeFile('./files/sample-one.txt', 'Hello Everyone', (err) => {
//     if (err) throw err;
//     console.log('Its Done!!');
// })

fs.appendFile('./files/sample-one.txt', '\nHello World', (err) => {
    if (err) throw err;
    console.log('Its Done!!');
})

