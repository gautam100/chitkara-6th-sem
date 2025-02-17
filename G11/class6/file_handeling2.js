let fp = require("fs");//system package


//Block code
function readFromFile(){
    let fileContent = fp.readFileSync("./data/sync.txt","utf-8");
	console.log(fileContent);
}

//Non Block code
function readFromFileAsync(){
    fp.readFile("./data/async.txt","utf-8",(err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log(res);
        }
    })
}


readFromFile();
readFromFileAsync();