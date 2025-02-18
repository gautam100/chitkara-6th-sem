let fp = require("fs"); 
function readFromFile(isSync=true){
    if(isAsync){
        //Non-Blocking Code
        fp.readFile("./data/sync.txt","utf-8",(err,res)=>{
            if(err){
                console.log(err);
            }else{
                console.log(res);
            }
        })
    }else{
        //Blocking code
        let fileContent = fp.readFileSync("./data/async.txt","utf-8");
        console.log(fileContent);
    }
}
readFromFile(false);
readFromFile(true);