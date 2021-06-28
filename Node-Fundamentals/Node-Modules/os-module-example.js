var os = require('os');

console.log("Host Name : " + os.hostname());
console.log("Total Memory : " + os.totalmem());
console.log("Free Memory : " + os.freemem());
console.log("OS Type : " + os.type());
console.log("OS Platform : " + os.platform());
console.log("User Info : " + os.userInfo().username);

