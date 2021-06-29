var fs = require('fs');

var data = fs.readFileSync('./files/demo-one.txt', "utf8");
console.log(data);

var data1 = fs.readFileSync('./files/demo-two.txt', "utf8");
console.log(data1);

console.log('The End...');