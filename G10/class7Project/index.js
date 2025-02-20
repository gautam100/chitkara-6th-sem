let connection = require("./connection");
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Middleware - to convert incoming data into JSON

// APIS or EndPoints
app.get("/", (req, resp) => {
  resp.send("<h1>Hello World!</h1>");
});
//Fetch all categories
app.get("/api/category", (req, resp) => {
  connection.query("SELECT * FROM master_category", (err, res) => {
    if (err) {
      resp.status(404).json({ msg: err });
    } else {
      resp.status(200).json({ msg: res });
    }
  });
});
//Fetch any individual category
app.get("/api/category/:id", (req, resp) => {
  let catId = req.params.id;
  console.log(catId);
  connection.query(
    `SELECT * FROM master_category WHERE id = ${catId}`,
    (err, res) => {
      if (err) {
        resp.status(404).json({ msg: err });
      } else {
        resp.status(200).json({ msg: res });
      }
    }
  );
});

//Insert category
app.post("/api/category", (req, resp) => {
  let body = req.body;
  if(!body.cate_name){
    return resp.status(400).json({ msg: 'Mandatory field is missing' });
  }
  connection.query(
    `INSERT INTO master_category (cate_name, cate_desc, is_enable, created_on, 
    created_by) VALUES ('${body.cate_name}','${body.cate_desc}','${body.is_enable}',
    '${body.created_on}','${body.created_by}')`,
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
});
//Delete category
app.delete("/api/category/:id", (req, resp) => {
    let id = req.params.id;
    connection.query(`DELETE FROM master_category WHERE id = ${id}`,(error,result)=>{
        if(error){
            return resp.status(400).json({"msg":error});
        }else{
            return resp.status(400).json({"msg":`Record deleted having id ${id}`});
        }
    })
});

//Modify some propeties of any category
app.patch("/api/category", (req, resp) => {
    let body = req.body;
    let id = body.id;
    if(!body.cate_name){
        return resp.status("404").json("msg","Mandatory field is missing!");
    }
    connection.query(`UPDATE master_category SET cate_name='${body.cate_name}', cate_desc='${body.cate_desc}' WHERE id = ${id}`,(error,result)=>{
        if(error){
            return resp.status(400).json({"msg":error})
        }else{
            return resp.status(200).json({"msg":"Record updated successfully!"})
        }
    })
});
//Modify a category
app.put("/api/category", (req, resp) => {
    let body = req.body;
    let id = body.id;
    if(!body.cate_name){
        return resp.status("404").json("msg","Mandatory field is missing!");
    }
    connection.query(`UPDATE master_category SET 
        cate_name='${body.cate_name}', 
        cate_desc='${body.cate_desc}',
        is_enable = '${body.is_enable}',
        created_on = '${body.created_on}',
        created_by = '${body.created_by}'
        WHERE id = ${id}`,(error,result)=>{
        if(error){
            return resp.status(400).json({"msg":error})
        }else{
            return resp.status(200).json({"msg":"Record updated successfully!"})
        }
    })
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
