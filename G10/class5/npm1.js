var readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question('Enter First Number:- '));
var num2 = parseInt(readlineSync.question('Enter Second Number:- '));
var num3 = parseInt(readlineSync.question('Enter Third Number:- '));

function doSum(num1,num2,num3){
    return num1+num2+num3;
}

console.log(doSum(num1,num2,num3));

