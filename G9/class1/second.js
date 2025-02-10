/*
Data Types -

Primitive
1) number
2) big int
3) string
4) boolean
5) Undefined
6) null
7) symbol

Non Primitive
1) Array
2) Object 

*/

let num = 10;
console.log("Value of num is "+num+" and type is: "+typeof num);
console.log(`Value of num is ${num} and type is: ${typeof num}`);

let num1 = 100000000;
console.log("Value of num is "+num1+" and type is: "+typeof num1);

let str = "JAVA";
console.log(str);//JAVA
//str = "PHP";
//console.log(str);//PHP


console.log(str[0],str[1],str[2],str[3])
str[0] = "K";
console.log(str);// Not work

let isWeekDay = false;
console.log(isWeekDay);

let a;
console.log(a);//undefined

console.log("--------------------");

let ar1 = new Array(10, 5, "Raj", true, null, [10,20]);
console.log(ar1);
//console.log(ar1[5][1]);
let ar2 = [];

ar2 = [...ar1];
console.log(ar2);
ar2[0] = 11;
console.log(ar2[0]);//11
console.log(ar1[0]);//10

let obj = {
	"name":"Rohit",
	"age" : 25,
	"hobby": ["Cricket","Gardening"]
}; //Object

console.log(obj.name);
console.log(obj.age);
console.log(obj.hobby[0]);
console.log(obj.hobby[1]);









