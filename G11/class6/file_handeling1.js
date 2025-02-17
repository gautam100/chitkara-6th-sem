let fp = require("fs");//system package
let readlineSync = require('readline-sync');
var content = readlineSync.question('Enter Content:- ');

//Block code
function writeInFile(){
    console.log("Writing begins...");
    fp.writeFileSync("./data/sync.txt",content);
    console.log("Writing ends...");
}

//Non-Blocking Code
function writeInFileAsync(){
    console.log("Start");
    //Below code will be executed by seprate thread or worker
    fp.writeFile("./data/async.txt",content,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Writing Completed");
        }
    });
    console.log("End");
}



function appendFile(){
    //Do it your-self
    
}
function appendFileAsync(){
    //Do it your self

}

writeInFile();
writeInFileAsync();
console.log("--------------------------");
