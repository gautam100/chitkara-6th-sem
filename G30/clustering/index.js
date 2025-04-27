const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

let totalCpus = os.cpus().length;
console.log(totalCpus);

if(cluster.isPrimary){
    for(let i=0; i<totalCpus;i++){
        cluster.fork();
    }
}else{
    app.get("/",(req,resp)=>{
        return resp.json({message:`process id is ${process.pid}`});
    });
    
    app.listen(3000,()=>console.log(`Server is running on port 3000`));
}



