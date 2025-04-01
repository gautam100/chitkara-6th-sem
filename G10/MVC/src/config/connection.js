const mysql = require("mysql2");

const connectionString = ({
    host: "localhost",
    user: "root",
    password: "Gautamdev2025", //Put your own root password
    database:"chitkara_ecomm" // Put your own database
});

let connection = mysql.createConnection(connectionString);

connection.connect((err)=>{
    if(err){
        console.log("Error in Database connection");
    }else{
        console.log("Database connected successfully!");
    }
})

module.exports = connection;