const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'rootpass',
    database: 'test_DB'
});

module.exports = db;