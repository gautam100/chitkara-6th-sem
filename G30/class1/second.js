/*
Data Types
a) Primitive Data Type
	1) Number
	2) Big int
	3) String
	4) boolean
	5) undfined
	6) null
	7) symbol
b) Non Primitive Data type
	1) Array
	2) Object
*/
let num = 10;
console.log(num, typeof(num)); //10

let bigNum = 1000000000;
console.log(bigNum);//1000000000

let str = "JOHN";
console.log(str[0],str[1]); //JO
str[0] = "H"; // Does not work
console.log(str[0]);
str = "PHP";
console.log(str);// PHP

let isWeekDay = false;
console.log(isWeekDay);

let u;
console.log(u);//undefined

let n = null;
console.log(n);//null

console.log("--------------------------");

let ar1 = new Array(5,"Raj",false,[10,20]);
console.log(ar1[0]);//5
console.log(ar1[2]);//false
console.log(ar1[3][1]);//20

let ar2 = [];
ar2 = ar1;
ar2[0] = 500;
console.log(ar2[0]);//500
console.log(ar1[0]);//5


let obj = {
	"name":"Rohit",
	"age": 24,
	"hobby": ["Gardening","Cricket"],
	"placement": {
		"comp1":"TCS",
		"Comp2":"HCL"
	}
};
//console.log(typeof(obj));
console.log(obj.name);//Rohit
console.log(obj.age);//24
console.log(obj.hobby[0]); //Gardening
console.log(obj.placement.comp1); // TCS





