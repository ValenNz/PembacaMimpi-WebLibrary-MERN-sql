/* File Connection to MySql */
const mysql = require("mysql")

/* Initialitation Database */
const db = mysql.createConnection({ 
    host: "localhost", 
    user: "root",
    password: "",
    database: "pembacamimpi_fullstack" 
})

/* Check Connection */
db.connect(error => {
    if (error) {                        
        console.log(error.message)      
    } else {                            
        console.log("MySQL Connected")  
    }
})


module.exports = db 
