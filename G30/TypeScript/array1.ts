let fruits1:string[] = ["Apple","Mango"];

let fruits2:Array<string|number|boolean> = ["Apple","Mango",true,1.5];

console.log(fruits2[0]); //Apple
console.log(fruits2[1]); //Mango
console.log(fruits2[2]); // undefined

//Wrong practice
let fruits3:any = ["Apple","Mango",true,1.5];


