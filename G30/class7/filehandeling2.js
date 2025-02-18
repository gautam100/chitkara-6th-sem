let fp = require("fs");//System module

function readFromFile(isAsync=true){
    if(isAsync){
        fp.readFile("./data/async.txt","utf-8",(err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
        })
        console.log("Completed!");
    }else{
        //Blocking Code
        let res = fp.readFileSync("./data/sync.txt","utf-8");
        console.log("Completed!",res);
    }
}

readFromFile(false);
console.log("---------------------");
readFromFile(true);