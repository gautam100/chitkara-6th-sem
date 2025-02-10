/*
--- var, let & const
*/

function MyFunc1(){
	var name = "John";
	if(true){
		var name= "Smith";
		console.log(name);//Smith
	}
	console.log(name);//Smith

}
MyFunc1();

console.log("----------------------");


function MyFunc2(){
	let name = "John";
	if(true){
		let name= "Smith";
		console.log(name);// smith
	}
	console.log(name);//John

}
MyFunc2();

(function MyFunc3(){
	const imgPath = "abc.png";
	console.log(imgPath);
	//imgPath = "\\var\\www\\xyz.png"

})();
