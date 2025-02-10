/*
 var, let & const
*/

function myFunc(){
	var name = "John";
	console.log("Name is",name);//John
	if(true){
		var name = "Smith";
		console.log("Name is",name);//Smith
	}
	console.log("Name is",name);//Smith
}

myFunc();

function myFunc1(){
	let name = "John";
	console.log("Name is",name);//John
	if(true){
		let name = "Smith";
		console.log("Name is",name);//Smith
	}
	console.log("Name is",name);//John
}

myFunc1();


function myFunc3(){
	const topic = "JS";
	console.log(topic);
	topic = "Node";//Error
}
myFunc3();