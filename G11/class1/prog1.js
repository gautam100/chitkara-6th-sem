/*
 --- var / let / const
*/

function printName(){
	var name = "John";
	if(true){
		var name = "smith";
		console.log(name); // smith	
	}
	console.log(name);//smith

}
printName();



function printName2(){
	let name = "John";//<<<
	if(true){
		let name = "smith";//<<<
		console.log(name); // smith	
	}
	console.log(name);//john

}
printName2();

function printName3(){
	const str = "Raj";
	str = "Rohit";//Error

}
printName3();