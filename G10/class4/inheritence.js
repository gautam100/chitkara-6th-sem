class MathClass{
    //spread operator: ...
    constructor(args){
        this.inputs = new Array();
        this.inputs = args;
    }
    doSum(){
        if(this.inputs.length>0){
            let sum = 0;
            for(let i of this.inputs){
                sum += i;
            }   
            return sum;
        }else{
            console.log("Error! Please send atleast one parameter");
        }
    }
}
class ChildClass extends MathClass{
    constructor(...args){
        super(args)
    }
}//ChildClassa

let obj1 = new ChildClass(2,7,3);
console.log(obj1.doSum());

let obj2 = new ChildClass(2,7);
console.log(obj2.doSum());

let obj3 = new ChildClass(2,7,3,10);
console.log(obj3.doSum());