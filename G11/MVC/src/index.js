const express = require("express");
const bodyParser = require("body-parser");
const categoryRoute = require("./routes/categoryRoute"); // importing categoryRoute.js


let app = express();
app.use(bodyParser.json()); //Middleware - convert incoming data into JSON

app.use('/api',categoryRoute);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
