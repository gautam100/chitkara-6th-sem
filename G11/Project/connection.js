const mysql = require("mysql2");

const connectionString = ({
    host: "localhost",
    user: "root",
    password: "Gautamdev2025",//Enter your own password
    database: "chitkara_ecomm"
});

let connection = mysql.createConnection(connectionString);

connection.connect((err)=>{
    if(err){
        console.log("Error! ",err);
    }else{
        console.log("Database connected successfully!")
    }

})

module.exports = connection;