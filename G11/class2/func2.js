function outer(){
	console.log("outer function");
	function inner(){
		console.log("inner function");
	}
	inner();
}
outer();
console.log("----------------------------");


let outer1 = function(a){
	return function(b){
		return function(c=0){
			return a+b+c;
		}
	}
}
console.log(outer1(5)(10)(2));
console.log(outer1(5)(10));

console.log("----------------------------");

let x = (a)=> a*a;

console.log(x(5));//25





