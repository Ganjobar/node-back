var mysql = require('mysql');
 
console.log('Get connection ...');
 
var conn = mysql.createConnection({
    database: 'ganjobar',
    host: "mysql.zzz.com.ua",
    user: "questi",
    password: "Qwerty12345"
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  alert("connected")
});