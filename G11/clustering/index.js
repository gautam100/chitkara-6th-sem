const cluster = require("cluster");
const express = require("express");
const os = require("os");
const app = express();

let totalCpus = os.cpus().length;
//console.log(totalCpus);

if(cluster.isPrimary){
    // -- Fork workers
    for(let i=0;i<totalCpus; i++){
        cluster.fork();
    }
}else{
    app.get("/",(req,resp)=>{
        return resp.json({'message':`process is running on ${process.pid}`});
    })
    
    app.listen(3000,()=>{
        console.log("Server is running on port 3000");
    })    

}


