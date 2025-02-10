function outer(){
	let x = 100;
	console.log("Its outer function");
	function inner(){
		console.log("Its inner function",x);
	}
	inner();
}

outer();
//inner();//Error