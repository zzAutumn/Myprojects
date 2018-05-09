$(document).ready(function(){
	$('h1').css({'color':'salmon'});
});
/*
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges){
	let graph = Object.create(null);
	function addEdge(from,to) {
		if (graph[from] == null ) {
			graph[from] = [to];
		}else {
			graph[from].push(to);
		}
	}
	for (let [from,to] of edges.map(r => r.split('-'))){
		addEdge(from,to);
		addEdge(to,from);
	}
	return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

let a = roads.map(r => r.split('-'));
console.log(a);
for (let [from,to] of a){
	console.log(from);
	
	console.log(to);
	console.log('------------');
}
let names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
//names.map(name => console.log(name));
let res = names.filter( name => name != "Matt");
console.log(res);
*/

function Person(name){
	this.name = name;
}

let tom = Person('tom');
console.log(tom.name);
console.log(this);


































