var mysql = require("mysql");

// connect with the given mysql database
//const connection = (async) => {
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mid",
});
//check the connection with database
connection.connect(function (err) {
  if(!err)
  console.log('Database is connected!');
else
  console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
});


module.exports = connection;
