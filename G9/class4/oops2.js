function Outer(){
    console.log("I am in constructor");
}

Outer.prototype.func1 = function(){
    console.log("In function1");
}
Outer.prototype.func2 = function(){
    console.log("In function2");
}

let obj1 = new Outer();
obj1.func1();
obj1.func2();