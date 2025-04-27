/*
-- concept of Objects in JS
*/

let obj = new Object();
let car = {
    color: "Red",
    make: "Maruti",
    model: "2018"
}; //Literal way

console.log(Object.keys(car)); // [color, make, model]
// some inbuilt properties of object: length, tostring

Object.defineProperty(car,"color",{
    enumerable:false,
    writable:false
});
console.log(Object.keys(car)); //[make, model]

car.color = "green";
console.log(car.color); //Red

 

Object.defineProperty(car,"color",{
    enumerable:false,
    writable:false,
    configurable:false
});

delete car.color;
console.log(car.color); //Red