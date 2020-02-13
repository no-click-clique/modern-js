import moment from "moment";
var math = require('mathjs');

var message = "Hello from JS";
console.log(message);
// document.querySelector("p").innerHTML = message;
var startOfToday = moment().startOf('day').fromNow();
console.log(`The start of today was ${startOfToday}`);

console.log(math.log(10000, 10));