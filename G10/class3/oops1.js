class MyClass{

    constructor(){
        console.log("I am in constructor");
    }

    func1(){
        console.log("In func1");
    }
    func2(){
        console.log("In func2");
    }

}//class end

let obj1 = new MyClass();

obj1.func1();
obj1.func2();
console.log("--------------------");
let obj2 = new MyClass();
obj2.func1();
obj2.func2();
console.log("--------------------");

let a = {}; // here a is an object of inbuilt class Object
console.log(typeof a);