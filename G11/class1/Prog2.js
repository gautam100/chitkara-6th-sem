/*
-Primitive Data Type
	1) number
	2) big integer
	3) String
	4) boolean
	5) null
	6) undefined
	7) symbol

-Non Primitive Data Type
	1) Array
	2) Object

*/

let num = 5;
console.log(`value of num is ${num}`);

let bigNum = 1000000000;
console.log(bigNum);

let str = "This is JS";
console.log(str);

let isWeekDay = false;
console.log(isWeekDay);

let ud;
console.log(ud);

let n = null;
console.log(n);

console.log("---------------------------------");
let ar1 = ["john","Smith","Raj","Rohit",100,false, null, undefined, [100,200],{}];
console.log(ar1[0]);//john
console.log(ar1[3]);//Rohit
console.log(ar1[4]);
console.log(ar1[8][0]);//100

let ar2 = new Array("Raj", 100, true);
console.log(ar2);

let obj = {
	"name": "John",
	"age" : 25,
	"hobby": ["gardening","cricket"],
	"offer":{
		"comp1":"TCS",
		"comp2": "HCL"
	}
}; //Object

console.log(obj.name);
console.log(obj.hobby[0]);//gardening
console.log(obj.offer.comp1);//TCS


