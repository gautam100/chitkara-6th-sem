let connection = require("./connection");
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());//Middleware - to convert incoming data into JSON

// APIS or EndPoints
app.get("/",(req,resp)=>{
    resp.send("<h1>Hello World!</h1>");
})

app.get("/api/category",(req,resp)=>{
    connection.query("SELECT * FROM master_category",(err,res)=>{
        if(err){
            resp.status(404).json({"msg":err})
        }else{
            resp.status(200).json({"msg":res});
        }
    });
});

app.get("/api/category/:id",(req,resp)=>{
    let catId = req.params.id;
    console.log(catId);
    connection.query(`SELECT * FROM master_category WHERE id = ${catId}`,(err,res)=>{
        if(err){
            resp.status(404).json({"msg":err})
        }else{
            resp.status(200).json({"msg":res});
        }
    });
});

app.listen(3000,()=>{
    console.log("App is running on port 3000");
});