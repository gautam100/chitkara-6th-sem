let userName:string = "Rohit";
let firstNum:number = 5; 

function doSum(a:number,b:number):number{
    return a+b;
}

console.log(doSum(5,7));


let a:(string | number) = "some sting";
a = 5;

let b:any;
b = 5;
b ="xyz...";
b = false;
b = [];
