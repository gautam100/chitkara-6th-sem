(function outer(){
	console.log("in Outer function");
	let a = 10;
	function inner(){
		console.log("in inner function",a);	
	}
	inner();
})();

//outer();
