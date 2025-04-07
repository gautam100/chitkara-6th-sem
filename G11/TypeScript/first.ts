//@ts-ignore
let firstNum:(number|string) = '5';
let myName: string = "Some name...";

let a:any;

a = 5;
a = true;
a = "string value";

console.log(a);

// ---------------------------------
//@ts-ignore
function doSum(a:number,b:number):number{
    return a+b;
}

console.log(doSum(5,7));