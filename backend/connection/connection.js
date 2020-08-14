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
  if (err) {
    return console.log("got an error while connecting with database");
  } else {
    return console.log(`Connected!!! with database ${connection.state}`);
  }
});

module.exports = connection;
