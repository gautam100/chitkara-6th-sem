class Shape{
    constructor(args){
        // console.log(args);
        this.inputs = new Array();
        this.inputs = args;
    }
    getArea(){
        let area=1;
        for (let i=0 ; i<inputs.length ; i++ ){
            area= area*inputs[i];
        }
        console.log(area);
    }
}
class Rectangle extends Shape{
    constructor(...args){
        super(args);
    }


}
let obj=new Rectangle(4,5);
class Square extends Shape{
    constructor(...args){

    }
}