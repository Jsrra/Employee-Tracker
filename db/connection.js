const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'root',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

db.connect(function (err) {
    if (err) throw err;
})

module.exports = db;