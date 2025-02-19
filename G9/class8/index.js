let connection = require("./connection");
let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); // convert input data into json

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World!</h1>");
});

app.get("/api/category", (req, resp) => {
  connection.query("SELECT * FROM master_category", (error, result) => {
    if (error) {
      //console.log(error);
      return resp.status(400).json({ msg: error });
    } else {
      //console.log(result);
      return resp.status(200).json({ data: result });
    }
  });
});

app.get("/api/category/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM master_category WHERE id = ${id}`,
    (error, result) => {
      if (error) {
        //console.log(error);
        return resp.status(400).json({ msg: error });
      } else {
        //console.log(result);
        return resp.status(200).json({ data: result });
      }
    }
  );
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

app.delete("/api/category/:id", (req, resp) => {
  let id = req.params.id;
  connection.query(
    `DELETE FROM master_category WHERE id = ${id}`,
    (err, res) => {
      if (err) {
        return resp.status(400).json({ msg: err });
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

app.patch("/api/category", (req, res) => {
  const body = req.body;
  const id = body.id;
  if (!body.cate_name) {
    return res.status(400).json({ msg: "Mandatory field is missing." });
  }
  connection.query(
    `UPDATE master_category SET cate_name = '${body.cate_name}', cate_desc= '${body.cate_desc}' WHERE id = ${id}`,
    (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error!" });
      } else {
        return res
          .status(201)
          .json({ msg: "One Record updated Successfully!" });
      }
    }
  );
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
      if (error) {
        console.log(error);
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
  console.log("Server is running on port 3000");
});
