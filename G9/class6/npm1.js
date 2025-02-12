var readlineSync = require('readline-sync');

class ConsoleInp{
    constructor(){
        this.firstNum = parseInt(readlineSync.question('Enter First Number:- '));
        this.secondNum = parseInt(readlineSync.question('Enter Second Number:- '));
        this.thirdNum = parseInt(readlineSync.question('Enter third Number:- '));
    }
    doSum(){
        return this.firstNum + this.secondNum + this.thirdNum;
    }
}

let obj = new ConsoleInp();
console.log(obj.doSum());

