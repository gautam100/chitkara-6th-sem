/*
 --- var / let / const
*/

function MyFunc1(){
	var name = "John";
	if(true){
		var name = "smith";
		console.log(name); // Smith
	}
	console.log(name); //Smith
}
MyFunc1();
//---------------------------------
function MyFunc2(){
	let name = "John";
	if(true){
		let name = "smith";
		console.log(name); // smith
	}
	console.log(name); //John
}
MyFunc2();
//---------------------------------
(function MyFunc3(){
	const image = "abc.png"
	console.log(image);
	//image = "xyz.png";//Error
})();
//---------------------------------



