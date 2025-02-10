// Array of Objects
(function MyFunc(){
	const studData = [
		{"id":1,"name":"Ajay","roll":"101","isPlaced":true},
		{"id":2,"name":"Amit","roll":"102","isPlaced":false},
		{"id":3,"name":"Rohit","roll":"103","isPlaced":true}
	];
	
	for(let data of studData)
	{

	console.log(`${data.id} ${data.name} ${data.roll} ${data.isPlaced}`);

	}
})();