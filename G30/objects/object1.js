//const obj1 = new Object(); 
const car = {
    "color":"red",
    "make": "Maruti",
    "model": "2018"
}; //literal way

// inbuild properties - length, tostring

console.log(Object.keys(car)); //[color, make, model]
Object.defineProperty(car,"color",{enumerable:false});
console.log(Object.keys(car)); // [make, model]

Object.defineProperty(car,"color",{
    enumerable:false,
    writable:false,
    configurable:false
});
car.color = "green"; //this will not work because writable is set to false

console.log(car.color); //red

delete car.color; //This will not work becoz configuration attribute is set to false
console.log(car.color);//red


console.log("-------------------------------------------");

const anyRandomFunc = ()=>5;
let arr = [anyRandomFunc(), {'a':1,'b':2},["Raj", true, 100.5]];
console.log(arr[0]);//5