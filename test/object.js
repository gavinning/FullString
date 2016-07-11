var fstring = require('../app');
var object = [
    {name: 'dev', desc: 'dev123'},
    {name: 'test', desc: 'test123'},
    {name: 'string', desc: 'string123'}
];

var fullstring = fstring(object, {key: 'name'}).join('\n');

console.log(fullstring)
