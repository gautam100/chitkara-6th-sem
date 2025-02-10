function outer(){
	console.log("Outer function");
	let a = 10;
	
	function inner(){
		console.log("Inner function",a);
	}
	inner();
}

outer();
