//const connection = require("./connection");
const express = require("express");
//const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json()); 


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


app.listen(3000, () => {
  console.log("App is running on port 3000");
});
