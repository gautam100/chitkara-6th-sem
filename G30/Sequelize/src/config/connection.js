/*
 --- Database Connection using Sequelize
*/
const { Sequelize } = require("sequelize");

// Making Connection
const connection = new Sequelize("chitkara_ecomm", "root", "Gautamdev2025", {
  host: "localhost",
  dialect: "mysql",
});

// Checking Connection
try {
  connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
module.exports = connection;



/*const mysql = require("mysql2");

const connectionString = ({
    host: "localhost",
    user: "root",
    password: "Gautamdev2025",//Enter your own root password
    database: "chitkara_ecomm" //Enter your own DB name
});
const connection = mysql.createConnection(connectionString);

connection.connect((err,res)=>{
    if(err){
        console.log("Error in DB connection",JSON.stringify(err));
    }else{
        console.log("Database connected successfully!")
    }
});
module.exports = connection;

*/
