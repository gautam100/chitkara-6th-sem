class ReportCard{
    jm;
    dsm;
    constructor(javaMarks,DSMarks){
        this.jm = javaMarks;
        this.dsm = DSMarks;
    }
    java(){
        console.log(this.jm);
    }
    dataStructure(){
        console.log(this.dsm);
    }

}

let rohit = new ReportCard(70,80);
rohit.java();
rohit.dataStructure();

console.log("----------------");

let raj = new ReportCard(85,65);
raj.java();
raj.dataStructure();


let a = {};//here a is the object of inbuilt class Object
console.log(typeof a);