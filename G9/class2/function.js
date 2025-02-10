/*
Function
1) named function
2) anonymous function

*/

console.log(myFunc1(5,2));
function myFunc1(a,b){
	return a+b;
}


let subtract = function(a,b){
	return a-b;
}
console.log(subtract(5,3));


/*
Arrow function
*/
let subtract1=(a,b)=> a-b;

console.log(subtract1(10,5));



