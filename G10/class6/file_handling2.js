let fp = require("fs");
function readFromFile(isAsync){
    if(isAsync){
        //Non-Blocling Code
        console.log("Start");
        fp.readFile("./data/async.txt","utf-8",(err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Non Block:-",res);
            }
        })
        console.log("End");
    }else{
        //Blocking code
        console.log("Start");
        let res = fp.readFileSync("./data/sync.txt","utf-8");
        console.log("Block:-",res);
        console.log("End");
    }
}

readFromFile(true);
console.log("-------------");
readFromFile(false);