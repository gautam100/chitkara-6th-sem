var readlineSync = require('readline-sync');

class MyMath{
    constructor(args){
        this.inputs = args;
    }
    doSum(){
        let sum = 0;
        for(let i of this.inputs){
            if(typeof i === "number"){
                sum += i;
            }else{
                continue;
            }
        }
        return sum;
    }
}
class ChildClass extends MyMath{

    constructor(...args){
        super(args);
    }

}
let first_num = parseInt(readlineSync.question('Enter First Number:- '));
let second_num = parseInt(readlineSync.question('Enter Second Number:- '));
let third_num = parseInt(readlineSync.question('Enter Third Number:- '));
let fourth_num = parseInt(readlineSync.question('Enter Fourth Number:- '));

let obj = new ChildClass(first_num,second_num);
console.log(obj.doSum());

let obj2 = new ChildClass(first_num,second_num,third_num);
console.log(obj2.doSum());//60

let obj3 = new ChildClass(first_num,second_num,third_num,fourth_num);
console.log(obj3.doSum());//100

