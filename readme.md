# FullString
补全字符串

### Install
```sh
# For nodejs
npm i fullstring --save
```

### Example String Not Split
```js
// node ./test/demo.js
var fstring = require('../app');
var string = ['dev', 'test', 'string'];

var fullstring = fstring(string).join('\n');

console.log(fullstring)

/*

dev-----
test----
string--

 */
```

### Example String Split
```js
// node ./test/string.js
var fstring = require('../app');
var string = ['dev, dev123', 'test, test123', 'string, string123'];

fstring.onchange = function(item, options){
    return item.replace(',', ' ')
}

var fullstring = fstring(string, {index: 0, split: ','}).join('\n');

console.log(fullstring)

/*

dev-----  dev123
test----  test123
string--  string123

*/

```

### Example Array
```js
// node ./test/array.js
var fstring = require('../app');
var array = [
    ['dev', 'dev123'],
    ['test', 'test123'],
    ['string', 'string123']
];

var fullstring = fstring(array, {index: 0}).join('\n');

console.log(fullstring)

/*

dev-----,dev123
test----,test123
string--,string123

*/

```

### Example Object
```js
// node ./test/object.js
var fstring = require('../app');
var object = [
    {name: 'dev', desc: 'dev123'},
    {name: 'test', desc: 'test123'},
    {name: 'string', desc: 'string123'}
];

var fullstring = fstring(object, {key: 'name'}).join('\n');

console.log(fullstring)

/*

{name: 'dev-----', desc: 'dev123'}
{name: 'test----', desc: 'test123'}
{name: 'string--', desc: 'string123'}

*/

```


### API
```js
fstring(array, options)
```
* ``@des`` 补全字符串  
  ``@param`` ``array`` ``type: Array`` 需要补全的字符串数组  
  ``@param`` ``options`` ``type: Object|String`` 可选，为String时默认为options.type  

* ``Options``  
  ``Options.type`` ``type: String`` 用于补全的字符串，默认为``-``  
  ``Options.size`` ``type: Number`` 补全位数，默认为``2``  
  ``Options.key `` ``type: String`` 当数组元素为对象时，需指定此参数以确定需格式化的值  
  ``Options.index`` ``type: Number`` 当数组元素为数组时，需指定需要补全的子数组元素索引  
  ``Options.split`` ``type: String`` 当数组元素字符串需要分段补全时，需指定分割符  
  ``Options.splitTo`` ``type: String`` 完成补全操作后将``Option.split``的值替换为``Option.splitTo``的值  
