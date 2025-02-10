function doAdd(a=0,b=0){
	return a+b;
}
console.log(doAdd(5,7));
console.log(doAdd(5));


let doSub = function(a=0,b=0){
	return a-b;
}
console.log(doSub(15,7));

/*
Arrow function
*/

let sub = (a=0,b=0)=> a-b;

console.log(sub(19,9));
