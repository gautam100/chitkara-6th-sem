function Myclass(){
    console.log("I am in constructor");
}
Myclass.prototype.func1 = function(){
    console.log("This is func1");
}
Myclass.prototype.func2 = function(){
    console.log("This is func2");
}

let obj = new Myclass();
obj.func1();
obj.func2();
