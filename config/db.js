mysql = require('mysql2')
const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'IMstupid',
    database : 'node'
  })
  dbConn.connect(function(err){
      if (err) {
          console.log(err)
          console.log('db not connected')
      }
  })
module.exports = dbConn
