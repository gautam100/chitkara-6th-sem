var readlineSync = require("readline-sync");

class MathClass {
  constructor() {
    let totLen = parseInt(readlineSync.question("Enter Length:- "));
    this.inputs = new Array();
    for (let i = 0; i < totLen; i++) {
      this.inputs[i] = parseInt(readlineSync.question(`Enter ${i + 1}  Number:- `));
    }
  }
  max() {
    let temp = null;
    for(let i=0;i<this.inputs.length;i++){
        for(let j=i+1;j<this.inputs.length;j++){
            if(this.inputs[i]>this.inputs[j]){
                temp = this.inputs[i];
                this.inputs[i] = this.inputs[j];
                this.inputs[j] = temp;
            }
        }//j
    }//i
    return this.inputs[this.inputs.length -1];
  }
}
let obj1 = new MathClass()
console.log(obj1.max());
//Modify this prog to find highest number from n inputs.
