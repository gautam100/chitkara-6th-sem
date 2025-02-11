class MyMath{
    //... is spread operator
    constructor(args){
        console.log(args);
        this.inputs = args;
    }
    doSum(){
        let sum = 0;
        for(let i of this.inputs){
            sum+=i;
        }
        return sum;
    }
}
class ChildClass extends MyMath{
    constructor(...args){
        super(args);//calling constructor of MyMath calss
    }
}

let obj1 = new ChildClass(5,10); 
console.log(obj1.doSum());

let obj2 = new ChildClass(15,1,12); //?
console.log(obj2.doSum());

let obj3 = new ChildClass(5,100,150,7); //?
console.log(obj3.doSum());