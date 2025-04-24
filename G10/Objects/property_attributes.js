/*
 -- Concept of Objects in JS
*/
let student = new Object(); //Standard way

let car = {
	'color': 'red',
	'make' : 'Maruti',
	'model' : 2018
}; // Generic way

console.log(car.propertyIsEnumerable("make")); //true
console.log(car.propertyIsEnumerable("length"));//false
console.log(car.propertyIsEnumerable("tostring"));//false

console.log(Object.keys(car)); //[color, make, model]
Object.defineProperty(car, "make", {enumerable: false});
console.log(Object.keys(car)) //[color, model]

console.log(car.make); //Maruti
Object.defineProperty(car, "make", {
	enumerable: false,
	writable:false,
	configurable: false
});
car.make = "Hundai";
console.log(car.make); //Maruti

delete car.make;
console.log(car.make); //Maruti