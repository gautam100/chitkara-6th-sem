var readlineSync = require('readline-sync');

class MathClass{
    constructor(args){
        this.inputs = new Array();
        this.inputs = args;
        //console.log(this.inputs);
    }
    doSum(){
        let sum = 0;
        for(let i=0;i<this.inputs.length;i++){
            sum+=this.inputs[i];
        }
        return sum;
    }
}

class ChildClass extends MathClass{
    constructor(...args){
        super(args);
    }
}

var firstNum = parseInt(readlineSync.question('Enter First Number:- '));
var secondNum = parseInt(readlineSync.question('Enter Second Number:- '));
var thirdNum = parseInt(readlineSync.question('Enter third Number:- '));

const obj1 = new ChildClass(firstNum,secondNum,thirdNum);
console.log(obj1.doSum());
const obj2 = new ChildClass(firstNum,secondNum);
console.log(obj2.doSum());

