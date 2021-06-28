
/*
var maxTime = 1000;
var pi = 3.14;
function addition() {
    console.log('Addition Performed..!!');
}
function subtract() {
    console.log('Subtraction Performed..!!');
}
module.exports.maxTime = maxTime;
module.exports.pi_value = pi;
module.exports.addition = addition;
module.exports.subtract = subtract;
*/

module.exports = {
    maxTime: 1000,
    pi_value: 3.14,
    addition: function () {
        console.log('Addition Performed..!!');
    },
    subtract: function () {
        console.log('Subtraction Performed..!!')
    }
}