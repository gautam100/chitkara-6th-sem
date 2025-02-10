/*
1) Named function
2) Anonymous function
*/

function doSum(a=0,b=0,c=0){
	return a+b+c;
};

console.log(doSum(5,2,6));
console.log(doSum(5,2));

console.log("--------------------------------");

let doSub = function(a=0,b=0){
	return a-b;
}
console.log(doSub(10,5),typeof doSub);
//doSum: function expression


