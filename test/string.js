var fstring = require('../app');
var string = ['dev, dev123', 'test, test123', 'string, string123'];

fstring.onchange = function(item, options){
    return item.replace(',', ' ')
}

var fullstring = fstring(string, {index: 0, split: ','}).join('\n');

console.log(fullstring)
