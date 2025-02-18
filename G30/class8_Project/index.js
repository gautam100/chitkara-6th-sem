const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Middleware: to convert incoming data into json

/* APIs */

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World!</h1>"); //HTML
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


app.listen(3000, () => {
  console.log("App is running on port 3000");
});
