const mysql = require('mysql')
const Promise = require ("bluebird")
const database='basic'
const dotenv = require("dotenv")  
dotenv.config()
const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
const db= Promise.promisifyAll(connection)

db.connectAsync()
.then(()=>{console.log(`connected to ${database}`);})


module.exports = db;
