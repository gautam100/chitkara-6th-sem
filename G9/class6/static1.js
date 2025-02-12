var readlineSync = require("readline-sync");

class MathClass {
  static max(a, b, c) {
    if (a < b) a = b;
    if (a < c) a = c;
    return a;
  }
}
firstNum = parseInt(readlineSync.question("Enter First Number:- "));
secondNum = parseInt(readlineSync.question("Enter Second Number:- "));
thirdNum = parseInt(readlineSync.question("Enter third Number:- "));

console.log(MathClass.max(firstNum, secondNum, thirdNum));
