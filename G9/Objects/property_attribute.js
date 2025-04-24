/*
 -- Concept of Objects in JS
*/

const obj = new Object();
const car = { 
    color: "red",
    make: "Maruti",
    model: 2018
} //Litral way

// length
// tostring

console.log(Object.keys(car)); //[color, make, model]
console.log(car.propertyIsEnumerable("color")); //true
console.log(car.propertyIsEnumerable("length")); //false

Object.defineProperty(car,"color",{
    enumerable: false,
    writable: false, //It prevents overwriting
    configurable: false //It prevent to delete property
});

// for(let key in car){
//     console.log(car[key]);
// }

console.log(Object.keys(car)); //[make, model]
car.color = "Green"; // This will not work because writable is set to false
console.log(car.color);//red

delete car.color; //This will not work because configurable is set to false
console.log(car.color);//red