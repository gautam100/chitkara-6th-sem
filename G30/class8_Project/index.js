const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Middleware: to convert incoming data into json

/* APIs */

//HTML Output in browser
app.get("/", (req, resp) => {
  resp.send("<h1>Hello World!</h1>");
});

//Fetch all record
app.get("/api/category", (req, resp) => {
  connection.query("SELECT * FROM master_category", (err, result) => {
    if (err) {
      resp.status(400).json({ msg: "Error in SQL" });
    } else {
      resp.status(200).json({ msg: result });
    }
  });
});

//Fetch Single Record
app.get("/api/category/:id", (req, resp) => {
  let userId = req.params.id;
  connection.query(
    `SELECT * FROM master_category WHERE id = ${userId}`,
    (err, result) => {
      if (err) {
        resp.status(400).json({ msg: "Error in SQL" });
      } else {
        resp.status(200).json({ msg: result });
      }
    }
  );
});

//Write data into table
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

//Delete data from server
app.delete("/api/category/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    `DELETE FROM master_category WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        return resp.status(200).json({ msg: err });
      } else {
          if (res.affectedRows > 0) {
            return resp
              .status(200)
              .json({ msg: `Record having id: ${id} deleted successfully!` });
          } else {
            return resp.status(404).json({ msg: "Record Not Found!" });
          }
      }
    }
  );
});

app.patch("/api/category", (req, resp) => {
  let body = req.body;
  let id = body.id;
  if(!body.cate_name){
    return resp.status(404).json({"msg":"Mandatory column is missing"});
  }
  connection.query(`UPDATE master_category SET cate_name = '${body.cate_name}', cate_desc= '${body.cate_desc}' WHERE id = ${id}`,(err,res)=>{
    if(err){
      return resp.status(404).json({"msg":err});
    }else{
      return resp.status(200).json({"msg":"Record updated successfully!"});
    }
  });
});

app.put("/api/category", (req, res) => {
  const body = req.body;
  const id = body.id;
  if (!body.cate_name) {
    return res.status(400).json({ msg: "Mandatory field is missing." });
  }
  connection.query(
    `UPDATE master_category SET cate_name = '${body.cate_name}', cate_desc= '${body.cate_desc}',  is_enable='${body.is_enable}', created_on='${body.created_on}', created_by='${body.created_by}' WHERE id = ${id}`,
    (error, rows) => {
      if(error) {
        return res.status(500).json({ msg: "Internal Server Error!" });
      } else {
        return res
          .status(201)
          .json({ msg: "One Record updated Successfully!" });
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
