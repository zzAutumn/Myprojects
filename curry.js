var curry = require('lodash.curry');

var match = curry(function(what,str){
	return str.match(what);
})

//console.log(match(/\s+/g,'hello world'));
//var hasSpaces = match(/\s+/g);
//console.log(hasSpaces('hello world'));
var add = curry(function(x,y){
	return x + y;
})

var increment = add(1);



console.log(increment(2));