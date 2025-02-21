const connection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); //Middleware - convert incoming data into JSON

//APIs
app.get("/", (req, resp) => {
  resp.send("<h1>Hello World</h1>");
});

//Fetch all categories
app.get("/api/category", (req, resp) => {
  connection.query("SELECT * FROM master_category", (err, result) => {
    if (err) {
      resp.status(400).json({ msg: "Error in SQL" });
    } else {
      resp.status(200).json({ msg: result });
    }
  });
});

//Fetch any single categories
app.get("/api/category/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM master_category WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        resp.status(400).json({ msg: "Error in SQL" });
      } else {
        resp.status(200).json({ msg: result });
      }
    }
  );
});

//insert category in database
app.post("/api/category", (req, resp) => {
  let body = req.body;
  if (!body.cate_name) {
    return resp.status(404).json({ msg: "Mandotory field is missing." });
  }
  connection.query(
    `INSERT INTO master_category 
        (cate_name, cate_desc, is_enable, created_on, created_by) 
        VALUES (
        '${body.cate_name}',
        '${body.cate_desc}',
        '${body.is_enable}',
        '${body.created_on}',
        '${body.created_by}'
        )`,
    (error, result) => {
      if (error) {
        return resp.status(404).json({ msg: error });
      } else {
        return resp.status(200).json({ msg: "Record inserted successfully!" });
      }
    }
  );
});

// Delete category
app.delete("/api/category/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    "DELETE FROM master_category WHERE id = ${id}",
    (err, result) => {
      if (err) {
        return resp.status("400").json({ msg: "Error in SQL" });
      } else {
        return resp.status("200").json({ msg: "Record deleted successfully." });
      }
    }
  );
});

//Update few columns of any record
app.patch("/api/category", (req, resp) => {
  let body = req.body;
  let id = body.id;
  if (!body.cate_name) {
    return resp.status("404").json({ msg: "Mandatory field is missing!" });
  }
  connection.query(
    `UPDATE master_category SET cate_name = '${cate_name}', cate_desc ='${cate_desc}' 
    WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        return resp.status("400").json({ msg: err });
      } else {
        return resp.status("200").json({ msg: "Record updated successfully" });
      }
    }
  );
});

//update the entire category
app.put("/api/category", (req, resp) => {
  let body = req.body;
  let id = body.id;
  if (!body.cate_name) {
    return resp.status("404").json({ msg: "Mandatory field is missing!" });
  }
  connection.query(
    `UPDATE master_category SET 
    cate_name = '${cate_name}', 
    cate_desc ='${cate_desc}',
    is_enable = '${is_enable}',
    created_on = '${created_on}',
    created_by = '${created_by}'
    WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        return resp.status("400").json({ msg: err });
      } else {
        return resp.status("200").json({ msg: "Record updated successfully" });
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
