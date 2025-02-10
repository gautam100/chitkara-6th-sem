//Array of Object
function MyFunc(){
	let data = [
		{"id":1,"name":"Raj","age":21,"isPlaced":true},
		{"id":2,"name":"Rohit","age":22,"isPlaced":false},
		{"id":3,"name":"John","age":21,"isPlaced":true}

	];

	console.log(data[1].name)//Rohit
	console.log(data[2].isPlaced);

}

MyFunc();