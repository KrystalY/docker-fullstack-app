const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql",
    user: "root",
    password "yoosj",
    database: "mayapp",
});
exports.pool = pool;