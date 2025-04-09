let fruits1:string[] = ["Apple","Mango"];

let fruits2:Array<string|number|boolean> = ["Apple","Mango",true,7];

console.log(fruits1);
console.log(fruits2);

console.log(fruits2[2]); // undefined


let a: (number|string) = 100;
a = 'raj';
