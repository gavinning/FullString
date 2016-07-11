var fstring = require('../app');
var array = [
    ['dev', 'dev123'],
    ['test', 'test123'],
    ['string', 'string123']
];

var fullstring = fstring(array, {index: 0}).join('\n');

console.log(fullstring)
