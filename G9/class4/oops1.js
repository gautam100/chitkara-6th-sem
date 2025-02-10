class MyClass{
    constructor(){
        console.log("I am in constructor");
    }
    myFunc1(){
        console.log("In Function1");
    }
    myFunc2(){
        console.log("In Function2");
    }

}

const obj = new MyClass();
console.log(typeof obj)
obj.myFunc1();
obj.myFunc2();

let a = {};
console.log(typeof a);
