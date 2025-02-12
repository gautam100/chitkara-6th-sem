var readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question('Enter First Number:- '));
var num2 = parseInt(readlineSync.question('Enter Second Number:- '));
var num3 = parseInt(readlineSync.question('Enter Third Number:- '));

class MathClass{
    static max(a,b,c){
        if(a<b)
            a=b;
        if(a<c)
            a=c;
        return a;
    }
}

console.log(MathClass.max(num1,num2,num3)," is highest");
//Modify this prog to find highest number from n inputs.