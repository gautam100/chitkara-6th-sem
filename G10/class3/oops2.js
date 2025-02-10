function MyClass(){

    

}

MyClass.prototype.func1 = function(){
    console.log("I am in func1");
}
MyClass.prototype.func2 = function(){
    console.log("I am in func2");
}

let obj1 = new MyClass();
obj1.func1();
obj1.func2();