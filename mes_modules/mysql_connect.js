const mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 1000,
    host: "localhost",
    user: "Djiby_Sarr_1996",
    password: "djiby_sarr_1996",
    database:"senegal_auto",
    multipleStatements:true
});

class connectToMysql{
    constructor(){
        return con;
    }
}
module.exports=connectToMysql;