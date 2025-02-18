let connection = require("./connection");
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); // convert input data into json

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World!</h1>");
});

app.get("/api/category",(req,resp)=>{
    connection.query("SELECT * FROM master_category",(error,result)=>{
        if(error){
            //console.log(error);
            return resp.status(400).json({"msg":error});
        }else{
            //console.log(result);
            return resp.status(200).json({"data":result});
        }
    })
});

app.post("/api/category", (req, resp) => {
  let body = req.body;
  //console.log(body);
  if (!body.cate_name) {
    return resp.status(400).json({ msg: "Mandatory field is missing!" });
  } else {
    connection.query(
      `INSERT INTO master_category (cate_name, cate_desc, is_enable, created_on, created_by) VALUES ('${body.cate_name}','${body.cate_desc}','${body.is_enable}','${body.created_on}','${body.created_by}')`,
      (err, result) => {
        if (err) {
          return resp.status(400).json({ msg: `Error in SQL:- ${err}` });
        } else {
          return resp
            .status(200)
            .json({ msg: "One record inserted successfully!" });
        }
      }
    );
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
