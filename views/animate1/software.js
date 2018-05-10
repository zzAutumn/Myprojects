
let h1 = document.getElementsByTagName('h1')[0];
//console.log(h1);
h1.className = 'head';
/*
var Flock = function(n){ this.seagulls = n }

//console.log(Flock.prototype);
Flock.prototype.conjoin = function(other){
	this.seagulls += other.seagulls;
	return this;
}

Flock.prototype.breed = function(other){
	if (other.seagulls == 0 ) {
		this.seagulls = this.seagulls;
	}else {
		this.seagulls = this.seagulls * other.seagulls;
	}
	return this;
}

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

console.log('flock_a.seagulls');
console.log(flock_a.seagulls);
console.log('flock_b.seagulls');
console.log(flock_b.seagulls);


var breed_a_b = flock_a.breed(flock_b);
console.log('flock_a breed flock_b');
console.log(breed_a_b.seagulls);

console.log('after flock_a.seagulls');
console.log(flock_a.seagulls);

console.log('after flock_b.seagulls');
console.log(flock_b.seagulls);

var breed_a_b_c = breed_a_b.breed(flock_c);
console.log(breed_a_b_c.seagulls);

var breed_a_b_c_a = breed_a_b_c.conjoin(flock_a);
console.log(breed_a_b_c_a);

let xs = [1,2,3,4,5];
console.log(xs);
console.log('splice (0,3) xs = ');
xs.splice(0,3);
console.log(xs);
console.log('splice (0,3) xs = ');
xs.splice(0,3);
console.log(xs);
console.log('-----------------------');
let xm = [6,7,8,9,10];
console.log(xm);
console.log('slice (0,3) xm = ');
xm.slice(0,3);
console.log(xm);
console.log('slice (0,3) xm = ');
xm.slice(0,3);
console.log(xm);
var parseQueryString = function(queryString){
	let params= {},queries,temp,i,l;

	queries = queryString.split("&");

	for (i = 0,l = queries.length; i < l; i++) {
		temp = queries[i].split("=");
		params[temp[0]] = temp[1];
	}

	return params;
}

let a = parseQueryString('https://www.google.com/search?q=jacascript+mdn&oq=jacascript+mdn&aqs=chrome..69i57j0l5.4738j0j8&sourceid=chrome&ie=UTF-8');
console.log(a);

var httpGet = function(url,params){
	return function(){ return getJSON(url,params)}
}

let url = httpGet('www.google.com','name');
console.log('typeof url ' + typeof(url));

urlJson = url();
console.log(url());
var curry = function(){};

var add = curry(function(x,y){
	return x + y;
})

console.log(typeof(add));
var get = function(prop,obj){
	return obj[prop];
}

var user = {id:32,name:'gary',email:'gary@qq.com'};

var email = get('email',user);
console.log(email);
var memoize = function(f){
	var cache = {};

	return function(){
		var arg_str = JSON.stringify(arguments);
		cache[arg_str] = cache[arg_str] || f.apply(f,arguments);
		return cache[arg_str];
	}
}

var squareNumber = memoize(function(x){
	return x * x;
})


//console.log(squareNumber(4));
console.log(JSON.stringify(x,function(x){
	return x * x;
}));
var signUP = function(Db,Email,attrs){
	return function(){
		var user = saveUser(Db,attrs);
		welcomeUser(Email,user);
	}
}
*/

var add = function(x){
	return function(y){
		return x + y;
	}
}

var increment = add(1);
var addTen = add(10);

console.log(increment(2));
console.log(addTen(2));


















