let express = require("express");
let bodyParser = require("body-parser");

const categoryRoute = require("./routes/categoryRoutes");

let app = express();
app.use(bodyParser.json()); // convert input data into json

app.use("/api/category", categoryRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
