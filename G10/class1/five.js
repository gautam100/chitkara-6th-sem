console.log(a); //undefined
var a;

function myFirstFunc(a=0,b=0){
	return a+b;
}
console.log(myFirstFunc(5,15));
console.log(myFirstFunc(5));//5
console.log(myFirstFunc());

let myFunc = function(a=0,b=0){
	return a-b;
}

console.log(myFunc(5,2));
console.log(myFunc(5));
console.log(myFunc());