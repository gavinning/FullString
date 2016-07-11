var fstring = require('../app');
var string = ['dev', 'test', 'string'];

var fullstring = fstring(string).join('\n');

console.log(fullstring)
