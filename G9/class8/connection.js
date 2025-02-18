const mysql = require("mysql2");
const connectionString = ({
    host: "localhost",
    user: "root",
    password: "Gautamdev2025", //Enter your own root password
    database: "chitkara_ecomm" //Enter the DB name of your mysql
});

const connection = mysql.createConnection(connectionString);
connection.connect((err)=>{
    if(err){
        console.log("Error in Database connection!",JSON.stringify(err));
    }else{
        console.log("Database connected Successfully");
    }
})
module.exports = connection;

