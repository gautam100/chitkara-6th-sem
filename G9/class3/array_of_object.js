 //Array of Object
function MyFunc(){
	let userData = [
		{"id":1,"name":"Raj","age":21,"isPlaced":true},
		{"id":2,"name":"Rohit","age":22,"isPlaced":false},
		{"id":3,"name":"John","age":21,"isPlaced":true}

	];

	for(let user of userData){
		console.log(user.id," ",user.name," ",user.age," ",user.isPlaced);
	} 

}

MyFunc();