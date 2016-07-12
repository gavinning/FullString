var is = require('aimee-is');
var extend = require('aimee-extend');

function fstring(arr, options){
    var type, length, max, res;

    if(is.string(options)){
        type = options;
        options = {};
        options.type = type;
    }

    options = extend({
        type: '-',
        size: 2,
        index: 0,
        split: ',',
        splitTo: false,
    }, options)

    return is.function(fstring.usermake) ?
        fstring.usermake(arr, options) :
        make(arr, options);
}

/**
 * fstring.usermake
 * 用户自定义处理程序
 */

/**
 * fstring.onchange
 * 字符串替换后回调
 */

// Get 指定长度的String
function getType(length, type) {
    var arr = [];
    for(var i=0; i<length; i++){
        arr.push(type)
    }
    return arr.join('')
}

// Get 数组中的最大值
function getMax(array, size){
    return Math.max.apply(null, array) + size || 0;
}

// 补全字符串
function make(array, options){
    return is.array(array[0])       ? makearray(array, options) :
           is.string(array[0])      ? makestring(array, options):
           is.plainObject(array[0]) ? makeobject(array, options):
           makeother(array);
}

// 补全字符串
function makestring(array, options){
    var length, max;

    // Options.split &&
    // 数组中每一个元素都包含Options.split
    if(options.split && array.every(function(item){ return item.indexOf(options.split) > 0 })){
        length = array.map(function(item){
            return item.split(options.split)[options.index].length
        })

        max = getMax(length, options.size)

        return array.map(function(item){
            var obj, arr;

            // 分割字符串
            arr = item.split(options.split);
            // 补全字符串片段
            arr[options.index] += getType(max-arr[options.index].length, options.type);
            // 恢复字符串分割前状态
            options.splitTo ? obj = arr.join(options.splitTo) : obj = arr.join(options.split)
            // 返回指定的补全后的字符串
            return is.function(fstring.onchange) ? fstring.onchange(obj) : obj;
        })
    }

    // Pure String
    else{
        length = array.map(function(item){
            return item.length
        })

        max = getMax(length, options.size)

        return array.map(function(item){
            item += getType(max-item.length, options.type)
            return is.function(fstring.onchange) ?
                fstring.onchange(item):
                item;
        })
    }
}

// 补全数组
function makearray(array, options){
    var length, max;

    length = array.map(function(item){
        return item[options.index].length
    })

    max = getMax(length, options.size)

    return array.map(function(item){
        item[options.index] += getType(max-item[options.index].length, options.type);
        return is.function(fstring.onchange) ?
            fstring.onchange(item):
            item;
    })
}

// 补全对象
function makeobject(array, options){
    var length, max;

    if(!options.key){
        console.log('Error: Object must be set options.key');
        return array;
    }

    length = array.map(function(item){
        return item[options.key].length
    })

    max = getMax(length, options.size)

    return array.map(function(item){
        item[options.key] += getType(max-item[options.key].length, options.type);
        return is.function(fstring.onchange) ?
            fstring.onchange(item):
            item;
    })
}

// 补全其他类型
function makeother(array, options){
    return array
}

module.exports = fstring;
