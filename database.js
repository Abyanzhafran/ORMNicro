const mysql = require("mysql")

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "orm-db",
// })

const conn = mysql.createConnection({
  host: "remotemysql.com",
  user: "PeP1Bpdnlz",
  password: "M3aLfKy2AY",
  database: "PeP1Bpdnlz",
})

module.exports = conn
