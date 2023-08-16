const mysql = require('mysql')
const Promise = require ("bluebird")
const database='basic'
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
})
const db= Promise.promisifyAll(connection)

db.connectAsync()
.then(()=>{console.log(`connected to ${database}`);})
.then(()=>{db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`)})
.then(()=>db.queryAsync(`use ${database}`))

module.exports = db;
