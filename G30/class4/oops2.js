function MyClass(){

}

MyClass.prototype.myFunc1 = function(){
    console.log("This is myFunc1");
}
MyClass.prototype.myFunc2 = function(){
    console.log("This is myFunc2");
}


let obj1 = new MyClass();
obj1.myFunc1();
obj1.myFunc2();
console.log("-----------------------");
let obj2 = new MyClass();
obj2.myFunc1();
obj2.myFunc2();