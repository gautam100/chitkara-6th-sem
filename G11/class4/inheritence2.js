/*
Create a parent class "shape" & two child class "Rectangle" & "Square"
In Shape class there should be a method calculateArea()
From the object of Rectangle and Square class call calculateArea()
which will return the area of rectangle and area of square

*/


class shape{
    constructor(...args){
        for(let a of args){
            if(typeof a !== "number"){
                console.log("Passed arguments type are wrong");
                return 0;
            }
        }
        this.inputs = args;
        this.getShape = this.inputs[this.inputs.length-1]
    }
    calculateArea(){
        if(this.getShape === "rectangle"){
            return this.inputs[0]*this.inputs[1];
        }else if(this.getShape === "square"){
            return this.inputs[0]*this.inputs[0];
        }else{
            return 'invalid input'
        }
    }
}

class square extends shape{
    constructor(side){
        super(side,'square');
    }
}

class rectangle extends shape{
    constructor(length,width){
        super(length,width,'rectangle1');
    }
}

var sq = new square(5);
console.log(sq.calculateArea());

var rect = new rectangle(4,5);
console.log(rect.calculateArea());