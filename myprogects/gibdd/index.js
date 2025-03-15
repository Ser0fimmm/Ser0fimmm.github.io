const express = require(`express`)
const mysql = require(`mysql2`)
const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: ``,
    database: `databasegibdd`,
});
connection.connect((err) => {
    if (err) {
        console.log(`ошибка подключения`);
        return;
    }
    console.log(`подключение установлено`);
})

