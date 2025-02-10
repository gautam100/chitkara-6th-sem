/*
-- Data types
Primitive 
 1) integer
 2) big int
 3) string
 4) boolean
 5) null
 6) undefined
 7) symbol	

Non Primitive
 1) Array
 2) Object

*/


let num = 500;
console.log(num); //500

let bigNum = 100000000;
console.log(bigNum);

let str = "JOHN";
str[0] = "K";
console.log(str); //KOHN
console.log(str[0]);//K

let u;
console.log(u); //undefined

let n = null;
console.log(n);

let isWeekEnd = false;
console.log(isWeekEnd);

console.log("-----------------------");

let ar1 = new Array(5,12,"raj",false,[10,20]);
let ar2 = [];
console.log(ar1[0]);//5
console.log(ar1[4][1]);//20

ar2 = ar1;
console.log(ar2);
ar2[0] = 500;

console.log(ar2[0]);//500
console.log(ar1[0]);//500

let myObj = {
	"name" : "Rohit",
	"age": 24,
	"hobby": ["cricket","gardening"],
	"placement":{
		"comp1": "TCS",
		"comp2": "HCL"
	}
};

console.log(myObj.name); // Rohit
console.log(myObj.hobby[0]); // Cricket
console.log(myObj.placement.comp1); // TCS







